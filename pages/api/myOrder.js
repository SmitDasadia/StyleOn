
import Order from "../../models/Order"
import connectDb from "../../middleware/mongoose"
import jsonwebtoken from "jsonwebtoken";


const handler = async (req, res) => {
  const token = req.body.token;
  const data = jsonwebtoken.verify(token, process.env.NEXT_PUBLIC_JWT_SECRAT)
  let order = await Order.find({email: data.email})
}


export default connectDb(handler)