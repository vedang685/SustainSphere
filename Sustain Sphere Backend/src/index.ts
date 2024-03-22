import blogRoutes from "./routes/blogRoutes";

require("dotenv").config()
// @ts-ignore
import express from 'express';
// @ts-ignore
import cors from 'cors';
import userRoutes from './routes/userRoutes';
import {dbconnect} from "./utils/database";
import registrationRoutes from "./routes/registrationRoutes";
require('dotenv').config();

const app = express();
const PORT = 8000;
dbconnect();
app.use(cors());
app.use(express.json({limit: '20mb'}));

// Routes
app.use('/api/auth', userRoutes);
app.use('/api/user/blog',blogRoutes);
app.use('/api/fillDetails',registrationRoutes)

app.listen(PORT, () => {
    console.log("Server running at port " + PORT);
});
