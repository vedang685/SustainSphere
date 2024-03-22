import mongoose from 'mongoose';
import {string} from "zod";

const ngoSchema = new mongoose.Schema({
    email: {
        type: String,
        require: true,
    },
    ngoName : {
        type: String,
        require:true,
    },


})

const NGOModel = mongoose.model('NGOs', ngoSchema);

export default NGOModel;
