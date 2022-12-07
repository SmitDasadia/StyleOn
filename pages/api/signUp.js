import User from "../../models/User"
import connectDb from "../../middleware/mongoose"

const handler = async (req, res) => {
    if (req.method == 'POST') {
        let u = new User(req.body)
        await u.save()
        res.status(200).json({ success: "New user Add To database." })

    } else {
        res.status(400).json({ error: "This method is not allowed." })
    }


}

export default connectDb(handler)