import User from"../../models/User"
import connectDb from "../../middleware/mongoose"
import  jsonWebToken  from "jsonwebtoken";
var CryptoJS = require("crypto-js")

const handler = async (req, res)=>{
    if(req.method == 'POST'){
        let token = req.body.token;
        let user = jsonWebToken.verify(token, process.env.NEXT_PUBLIC_JWT_SECRAT);
        let dbuser = await User.findOne({email: user.email})
        const bytes = CryptoJS.AES.decrypt(dbuser.password, process.env.NEXT_PUBLIC_EN_KEY);
        let decyptedpassword = bytes.toString(CryptoJS.enc.Utf8);
        console.log(decyptedpassword)
        if(decyptedpassword == req.body.currentPassword && req.body.newPassword == req.body.confirmPassword ){
            let databaseUser = await User.findOneAndUpdate({email: user.email},{password: CryptoJS.AES.encrypt(req.body.confirmPassword,process.env.NEXT_PUBLIC_EN_KEY).toString()})
            res.status(200).json({ success: true})
            return
        } else {
            res.status(400).json({ success: false})
           
        } 
        
      
        

        // let user = await User.find()

    } else {
        res.status(400).json({ error: "error" })
    }
    

}

export default connectDb(handler)