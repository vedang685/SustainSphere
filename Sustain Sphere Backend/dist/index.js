"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const blogRoutes_1 = __importDefault(require("./routes/blogRoutes"));
require("dotenv").config();
// @ts-ignore
const express_1 = __importDefault(require("express"));
// @ts-ignore
const cors_1 = __importDefault(require("cors"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const database_1 = require("./utils/database");
const registrationRoutes_1 = __importDefault(require("./routes/registrationRoutes"));
require('dotenv').config();
const app = (0, express_1.default)();
const PORT = 8000;
(0, database_1.dbconnect)();
app.use((0, cors_1.default)());
app.use(express_1.default.json({ limit: '20mb' }));
// Routes
app.use('/api/auth', userRoutes_1.default);
app.use('/api/user/blog', blogRoutes_1.default);
app.use('/api/fillDetails', registrationRoutes_1.default);
app.listen(PORT, () => {
    console.log("Server running at port " + PORT);
});
