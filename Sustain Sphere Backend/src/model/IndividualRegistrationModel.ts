import mongoose, {Schema} from 'mongoose';


const individualRegistrationSchema = new mongoose.Schema({
    userType : {
        type : String
    },
    profilePhoto:
         [{
        uid :{
            type : String
             },
             lastModified :{
             type : String
             } ,
             lastModifiedDate :{
                 type : String
             },
             name:{
                 type : String
             },
             thumbUrl:{
             type:String
             },
             type: {
             type : String
             },
             size : {
             type : Number,
             }
    }],
    fullName: {
        type: String,

    },
    country: {
        type: String,

    },
    state : {
        type: String,

    },
    address : {
        type: String,
    },
    occupation : {
        type: String,
    },
    joiningReason : {
        type: String,
    },
    email : {
        type: Schema.Types.ObjectId,
        ref: "Users"
    },
    blogs : [{
        type: Schema.Types.ObjectId,
        ref: "Blogs"
    }]
})

const individualRegistrationModel = mongoose.model('individual', individualRegistrationSchema);

export default individualRegistrationModel;
