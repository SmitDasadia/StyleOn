
import Order from "../../models/Order"
import Product from "../../models/Product";
import connectDb from "../../middleware/mongoose"


const handler = async (req, res) => {
  let order;
  if (req.body.STATUS == "TXN_SUCCESS") {

    order = await Order.findOneAndUpdate({ orderId: req.body.ORDERID }, { status: "Paid", paymentInfo: JSON.stringify(req.body) });
    let products = Order.products;
    for (let slug in products) {

      await Product.findOneAndUpdate({ slug: slug }, { $inc: { "avialableQty": - products[slug].qty } })
    }

  } else if (req.body.STATUS == "PENDING") {

    order = await Order.findOneAndUpdate({ orderId: req.body.ORDERID }, { status: "Pending" });

  }
  res.redirect("/order?id=" + order._id, 200)
  // res.status(200).json({ body: req.body })
}


export default connectDb(handler)