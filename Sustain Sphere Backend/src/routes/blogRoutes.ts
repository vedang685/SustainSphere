import express from "express";
import {createBlog, getAllBlogs, getCurrentBlog, getUserBlogs} from "../controller/blogController";

const router = express.Router();

router.post('/',createBlog );
router.get('/getAll',getAllBlogs);
router.get('/getUserBlogs', getUserBlogs)
router.post('/currentBlog',getCurrentBlog)

// TODO allow the user to update the blog

export default router;
