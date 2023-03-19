import Order from "../../models/Order"
import connectDb from "../../middleware/mongoose"

const handler = async (req, res) => {
    if (req.method == 'POST') {
        for (let i = 0; i < req.body.length; i++) {
            let p = new Order({
                // title: req.body[i].title,
                // slug: req.body[i].slug,
                // desc: req.body[i].desc,
                // img: req.body[i].img,
                // category: req.body[i].category,
                // size: req.body[i].size,
                // color: req.body[i].color,
                // price: req.body[i].price,
                // avialableQty: req.body[i].avialableQty,


                name: req.body[i].name,
                email: req.body[i].email,
                paymentGatway: req.body[i].paymentGatway,
                transactionId: req.body[i].transactionId,
                orderId: req.body[i].orderId,
                // product: req.body[i].product,
                amount: req.body[i].amount,
                address: req.body[i].address,
                city: req.body[i].city,
                pincode: req.body[i].pincode,
                phone: req.body[i].phone,
                paymentStatus: req.body[i].paymentInfo,

                // "name": "SmitDasadia",
                // "email": "smitdasadia@gmail.com",
                // "paymentGatway": "Bank",
                // "transactionId": "452136950",

                // "amount": "399",
                // "address": "Testing Address",
                // "city": "Rajkot",
                // "phone": "12314567890",
                // "paymentStatus": "Paid",
            })
            await p.save()
        }
        res.status(200).json({ success: "Your Product Add To database." })

    } else {
        res.status(400).json({ error: "This method is not allowed." })
    }


}

export default connectDb(handler)