import mongoose from 'mongoose';
import userModel from "./UserModel";

const registerUserSchema = new mongoose.Schema({
    email: String,
    password: String,
    verificationToken:String,


});

const registerUserModel =  mongoose.model('TempUsers',  registerUserSchema);

export default registerUserModel;
