import mongoose, {Schema} from "mongoose";


const blogsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    tags : {
        type: String,
        required: true,
    },
    author : {
        type: Schema.Types.ObjectId,
        ref: "Users"
    }
});

const blogModel = mongoose.model("Blogs", blogsSchema)

export default blogModel;
