import mongoose, {Schema} from 'mongoose';


const instituteRegistrationSchema = new mongoose.Schema({
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
    nameOfNGO: {
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
    type : {
        type: String,
    },
    joiningReason : {
        type: String,
    },
    noOfStudents : {
        type: Number,
    },
    nameOfContactPerson : {
        type: String,
    },
    website : {
        type: URL,
    },
    mission : {
        type : String

    } ,
    proofOfRegistration : {
        type : File
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

const instituteRegistrationModel = mongoose.model('individual', instituteRegistrationSchema);

export default instituteRegistrationModel;
