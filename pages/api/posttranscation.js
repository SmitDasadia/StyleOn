
import Order from "../../models/Order"
import connectDb from "../../middleware/mongoose"


const handler = async (req, res) => {
  if (req.body.STATUS == "TXN_SUCCESS") {

    await Order.findOneAndUpdate({ orderId: req.body.ORDERID }, { status: "Paid", paymentInfo: JSON.stringify(req.body) });

  } else if (req.body.STATUS == "PENDING") {

   await Order.findOneAndUpdate({ orderId: req.body.ORDERID }, { status: "Pending" });

  }
  res.redirect("/order", 200)
  // res.status(200).json({ body: req.body })
}


export default connectDb(handler)