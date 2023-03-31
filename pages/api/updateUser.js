import User from"../../models/User"
import connectDb from "../../middleware/mongoose"
import  jsonWebToken  from "jsonwebtoken";

const handler = async (req, res)=>{
    if(req.method == 'POST'){
        let token = req.body.token;
        let user = jsonWebToken.verify(token, process.env.NEXT_PUBLIC_JWT_SECRAT);
        let dbuser = await User.findOneAndUpdate({email: user.email},{address: req.body.address, pincode: req.body.pincode, phone: req.body.phone, name: req.body.name, city: req.body.city,state: req.body.state,country: req.body.country})
        const {name,email,pincode,address,phone,city,state,country} = dbuser
        

        // let user = await User.find()

        res.status(200).json({ success: true})
    } else {
        res.status(400).json({ error: "error" })
    }
    

}

export default connectDb(handler)