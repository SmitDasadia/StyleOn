import mongoose, { connect } from 'mongoose';



const UserSchema = new mongoose.Schema({
   
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    pincode: { type: String, default:"" },
    phone: { type: String, default:"" },
    address: { type: String, default:"" },
    city: { type: String, default:"" },
    state: { type: String, default:"" },
    country: { type: String, default:"" },
  
    
}, { timestamps: true });

mongoose.models = {}

export default mongoose.model("User", UserSchema)