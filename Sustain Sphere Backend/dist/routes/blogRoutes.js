"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const blogController_1 = require("../controller/blogController");
const router = express_1.default.Router();
router.post('/', blogController_1.createBlog);
router.get('/getAll', blogController_1.getAllBlogs);
router.get('/getUserBlogs', blogController_1.getUserBlogs);
router.post('/currentBlog', blogController_1.getCurrentBlog);
// TODO allow the user to update the blog
exports.default = router;
