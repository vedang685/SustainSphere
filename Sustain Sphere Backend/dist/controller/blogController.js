"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUserBlog = exports.getCurrentBlog = exports.getUserBlogs = exports.getAllBlogs = exports.createBlog = void 0;
const UserModel_1 = __importDefault(require("../model/UserModel"));
const BlogModel_1 = __importDefault(require("../model/BlogModel"));
const BlogModel_2 = __importDefault(require("../model/BlogModel"));
function createBlog(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const email = req.headers.email;
            const isUser = yield UserModel_1.default.findOne({ email });
            if (!isUser) {
                return res.status(401).json({ status: false, msg: 'Invalid User!!' });
            }
            const { title, content, date, tags } = req.body;
            try {
                yield BlogModel_1.default.create({
                    title,
                    content,
                    date,
                    tags,
                    author: isUser._id
                });
            }
            catch (ex) {
                return res.status(500).json({ status: false, msg: 'Internal Server Error!!' });
            }
            return res.status(200).json({ status: true });
        }
        catch (ex) {
            console.log(ex);
            return res.status(500).json({ status: false, msg: 'Internal Server Error!!' });
        }
    });
}
exports.createBlog = createBlog;
function getAllBlogs(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const blogs = yield BlogModel_1.default.find({});
            return res.status(200).json({ blogs });
        }
        catch (ex) {
            console.log(ex);
            return res.status(500).json({ status: false, msg: 'Internal Server Error!!' });
        }
    });
}
exports.getAllBlogs = getAllBlogs;
function getUserBlogs(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const email = req.headers.email;
            const isUser = yield UserModel_1.default.findOne({ email });
            if (!isUser) {
                return res.status(401).json({ status: false, msg: 'Invalid User!!' });
            }
            const userWithBlogs = yield UserModel_1.default.findOne({ email }).populate('blogs');
            if (!userWithBlogs) {
                return res.status(404).json({ status: false, msg: 'User has no blogs!!' });
            }
            return res.status(200).json({ status: true, userWithBlogs });
        }
        catch (err) {
            console.error(err);
            return res.status(500).json({ status: false, msg: 'Internal Server Error!!' });
        }
    });
}
exports.getUserBlogs = getUserBlogs;
function getCurrentBlog(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const id = req.body._id;
            const blog = yield BlogModel_2.default.findById(id);
            if (!blog) {
                return res.status(404).json({ status: false, msg: 'No blog found!!' });
            }
            return res.status(200).json({ blog });
        }
        catch (err) {
            console.error(err);
            return res.status(500).json({ status: false, msg: 'Internal Server Error!!' });
        }
    });
}
exports.getCurrentBlog = getCurrentBlog;
function updateUserBlog(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { blogId } = req.params;
            const { title, content } = req.body;
            // Find the blog by its ID and update it
            const updatedBlog = yield BlogModel_1.default.findByIdAndUpdate(blogId, { title, content }, { new: true } // This option returns the updated document
            );
            if (!updatedBlog) {
                return res.status(404).json({ status: false, msg: 'Blog not found!!' });
            }
            return res.status(200).json({ status: true, updatedBlog });
        }
        catch (err) {
            console.error(err);
            return res.status(500).json({ status: false, msg: 'Internal Server Error!!' });
        }
    });
}
exports.updateUserBlog = updateUserBlog;
