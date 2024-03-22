import {Request, Response} from "express";
import userModel from "../model/UserModel";
import blogModel from "../model/BlogModel";
import BlogModel from "../model/BlogModel";


export async function createBlog(req: Request, res: Response): Promise<Response> {
    try {
        const email = req.headers.email;
        const isUser = await userModel.findOne({ email });
        if (!isUser) {
            return res.status(401).json({ status: false, msg: 'Invalid User!!' });
        }
        const { title, content, date, tags} = req.body

        try{
            await blogModel.create({
                title,
                content,
                date,
                tags ,
                author : isUser._id
            });
        }catch (ex){
            return res.status(500).json({ status: false, msg: 'Internal Server Error!!' });
        }
        return res.status(200).json({ status: true });
    }
    catch (ex) {
        console.log(ex);
        return res.status(500).json({ status: false, msg: 'Internal Server Error!!' });
    }
}

export async function getAllBlogs(req : Request, res : Response) : Promise<Response> {
    try {
        const blogs = await blogModel.find({});
        return res.status(200).json({ blogs });
    }
    catch (ex) {
        console.log(ex);
        return res.status(500).json({ status: false, msg: 'Internal Server Error!!' });
    }
}

export async function getUserBlogs(req: Request, res: Response): Promise<Response> {
    try {
        const email = req.headers.email;
        const isUser = await userModel.findOne({ email });
        if (!isUser) {
            return res.status(401).json({ status: false, msg: 'Invalid User!!' });
        }
        const userWithBlogs = await userModel.findOne({ email }).populate('blogs');

        if (!userWithBlogs) {
            return res.status(404).json({ status: false, msg: 'User has no blogs!!' });
        }
        return res.status(200).json({ status: true, userWithBlogs });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ status: false, msg: 'Internal Server Error!!' });
    }
}

export async function getCurrentBlog(req: Request, res: Response): Promise<Response> {
    try {
        const id = req.body._id;

        const blog = await BlogModel.findById(id)

        if (!blog) {
            return res.status(404).json({ status: false, msg: 'No blog found!!' });
        }
        return res.status(200).json({ blog });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ status: false, msg: 'Internal Server Error!!' });
    }
}


export async function updateUserBlog(req: Request, res: Response): Promise<Response> {
    try {
        const { blogId } = req.params;
        const { title, content } = req.body;

        // Find the blog by its ID and update it
        const updatedBlog = await blogModel.findByIdAndUpdate(
            blogId,
            { title, content },
            { new: true } // This option returns the updated document
        );

        if (!updatedBlog) {
            return res.status(404).json({ status: false, msg: 'Blog not found!!' });
        }

        return res.status(200).json({ status: true, updatedBlog });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ status: false, msg: 'Internal Server Error!!' });
    }
}
