import User from"../../models/User"
import connectDb from "../../middleware/mongoose"
import  jsonWebToken  from "jsonwebtoken";

const handler = async (req, res)=>{
    if(req.method == 'POST'){
        let token = req.body.token;
        let user = jsonWebToken.verify(token, process.env.NEXT_PUBLIC_JWT_SECRAT);
        let dbuser = await User.findOne({email: user.email})
        const {name,email,pincode,address,phone,city,state,country} = dbuser
        

        // let user = await User.find()

        res.status(200).json({ name,email,pincode,address,phone,city,state,country})
    } else {
        res.status(400).json({ error: "error" })
    }
    

}

export default connectDb(handler)