const mongoose = require('mongoose');

const registerUserSchema = new mongoose.Schema({
    email: String,
    password: String,
    verificationToken:String

});

const RegisterUserSchema =  mongoose.model('TempUsers',  registerUserSchema);

module.exports = RegisterUserSchema;
