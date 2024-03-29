import { rejects } from 'assert';
import { resolve } from 'path';

const https = require('https');
const PaytmChecksum = require('paytmchecksum');
import Order from "../../models/Order"
import Product from "../../models/Product"
import connectDb from "../../middleware/mongoose"
import pincode from "../../data/pincode.json";


const handler = async (req, res) => {
    if (req.method == 'POST') {

        // check details are vaild or not
        if(req.body.phone.length != 10 && !Number.isInteger(req.body.phone)){
            res.status(400).json({ success: false, "error": "Invalid Phone Number", cartClear: false })
            return
        }

        if(req.body.pincode.length != 6 && !Number.isInteger(req.body.pincode)){
            res.status(400).json({ success: false, "error": "Invalid pincode", cartClear : false })
            return
        }

        // check the pincode is servicable or not

        if(!Object.keys(pincode).includes(req.body.pincode)){
            res.status(400).json({ success: false, "error": "Your pincode is not serviceable!", cartClear : false })
            return
        }



        // check the cart is temperd or not
        let product, sumTotal = 0;
        let cart = req.body.cart;

        if (req.body.subTotal <= 0) {
            res.status(400).json({ success: false, "error": "Cart is empty. Please your build cart and try again",cartClear : false })
            return
        }

        for (let item in cart) {
            product = await Product.findOne({ slug: item });
            sumTotal += cart[item.price] * cart[item].qty;



            // out to cart out of stock

            if (product.avialableQty < cart[item].qty) {
                res.status(400).json({ success: false, "error": "Some item in your cart is out of stock.Please try again!", cartClear : true })
                return
            }

            if (product.price != cart[item].price) {
                res.status(400).json({ success: false, "error": "The price of some item in your cart hav been changed. Please try again!",cartClear : true })
                return
            }
        }

        if (sumTotal !== req.body.subTotal) {
            res.status(400).json({ success: false, "error": "The price of some item in your cart hav been changed. Please try again!", cartClear : true })
            return
        }
        




        




        // initate order

        let order = new Order({
            name: req.body.name,
            email: req.body.email,
            orderId: req.body.orderId,
            address: req.body.address,
            pincode: req.body.pincode,
            amount: req.body.subTotal,
            phone: req.body.phone,
            products: req.body.cart,
        })

        await order.save();




        var paytmParams = {};

        paytmParams.body = {
            "requestType": "Payment",
            "mid": process.env.NEXT_PUBLIC_PAYTM_MID,
            "websiteName": "YOUR_WEBSITE_NAME",
            "orderId": req.body.oid,
            "callbackUrl": `${process.env.NEXT_PUBLIC_HOST}/api/posttranscation`,
            "txnAmount": {
                "value": req.body.subTotal,
                "currency": "INR",
            },
            "userInfo": {
                "custId": req.body.email,
            },
        };

        /*
        * Generate checksum by parameters we have in body
        * Find your Merchant Key in your Paytm Dashboard at https://dashboard.paytm.com/next/apikeys 
        */
        const checksum = await PaytmChecksum.generateSignature(JSON.stringify(paytmParams.body), process.env.NEXT_PUBLIC_PAYTM_MKEY)

        paytmParams.head = {
            "signature": checksum
        };

        var post_data = JSON.stringify(paytmParams);

        const requestAsync = async () => {
            return new Promise((resolve, reject) => {
                var options = {

                    /* for Staging */
                    hostname: 'securegw-stage.paytm.in',

                    /* for Production */
                    // hostname: 'securegw.paytm.in',

                    port: 443,
                    path: '/theia/api/v1/initiateTransaction?mid={process.env.NEXT_PUBLIC_PAYTM_MID}&orderId=${req.body.oid}',
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Content-Length': post_data.length
                    }
                };

                var response = "";
                var post_req = https.request(options, function (post_res) {
                    post_res.on('data', function (chunk) {
                        response += chunk;
                    });

                    post_res.on('end', function () {
                        let ress = JSON.parse(response).body;
                        ress.success = true;
                        ress.cartClear = false;

                        resolve(ress)
                    });
                });

                post_req.write(post_data);
                post_req.end();
            })
        }

        let newRequest = await requestAsync();
        res.status(200).json(newRequest)




    }
}


export default connectDb(handler)