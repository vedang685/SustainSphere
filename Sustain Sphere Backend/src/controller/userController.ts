import userModel from "../model/UserModel";
import { Request, Response } from 'express';
import {hashPassword, verifyPassword} from "../utils/passwordHashing";
const jwt = require("jsonwebtoken")
import {registerInput, signinInput, signupInput} from "../types/ZodTypes";
import {sendVerificationMail} from "../middleware/VerifyEmail";
import registerUserModel from "../model/RegisterUserModel"
import {generateToken} from "../utils/jwtToken";


// @desc save use to the database if not already present
// export async function signup(req: Request, res: Response): Promise<Response> {
//     try {
//         // input validation
//         const parsedResponse = signupInput.safeParse(req.body);
//         if (!parsedResponse.success) {
//             return res.status(401).json({
//                 status: false,
//                 msg: 'Invalid Input',
//             });
//         }
//
//         // Check if username is already present, else save
//         const { email, password} = req.body;
//         if (!process.env.SECRET) return res.status(500);
//         const token = jwt.sign({ email }, process.env.SECRET);
//         const isUser = await userModel.findOne({ email });
//         if (isUser) {
//             return res.status(401).json({ status: false, msg: 'User already exits!!' });
//         } else {
//             const securePassword = await hashPassword(password);
//             await sendVerificationMail(email,token,securePassword)
//         }
//         return res.status(200).json({ status: true, token });
//     }
//     catch (ex) {
//         console.log(ex);
//         return res.status(500).json({ status: false, msg: 'Internal Server Error!!' });
//     }
// }

export async function signin(req: Request, res: Response): Promise<Response> {
    try {
        const parsedResponse = signinInput.safeParse(req.body);
        if (!parsedResponse.success) {
            return res.status(401).json({
                status: false,
                msg: 'Invalid Input',
            });
        }

        const { email, password } = req.body;
        const user = await userModel.findOne({ email });

        if (!user) {
            return res.status(401).json({ status: false, msg: 'Invalid Username Or Password' });
        }
        if(password !== user.password){
            return res.status(401).json({ status: false, msg: 'Invalid Username Or Password' });
        }
        // Verify the provided password against the hashed password
        const isPasswordValid = verifyPassword(password, user.password)

        if (!isPasswordValid) {
            return res.status(401).json({ status: false, msg: 'Invalid Username Or Password' });
        }

        if (!process.env.SECRET) {
            return res.status(500);
        }
        const token = jwt.sign({ email }, process.env.SECRET);
        return res.status(200).json({token, status: true,email });
    } catch (ex) {
        console.log(ex);
        return res.status(500).json({ status: false, msg: 'Internal Server Error!!' });
    }
}


export async function detailsFilled(req: Request, res : Response) : Promise<Response>{
    try {
        const email = req.body.email;
        if (!email) {
            return res.status(401).json({ status: false, msg: 'Invalid' });
        }
        const isUser = await userModel.findOne({ email });
        if (!isUser) {
            return res.status(401).json({ status: false, msg: 'Error' });
        } else{
            return res.status(200).json(isUser.detailsFilled)
        }
    }
    catch (ex) {
        console.log(ex);
        return res.status(500).json({ status: false, msg: 'Internal Server Error!!' });
    }
}

export async function registerNewUser(req: Request, res : Response) : Promise<Response>{
    try{
        const parsedResponse = registerInput.safeParse(req.body);
        if (!parsedResponse.success) {
            return res.status(401).json({
                status: false,
                msg: 'Invalid Input',
            });
        }

        const { email, password} = req.body;
        if (!process.env.SECRET) return res.status(500);
        const isUser = await userModel.findOne({ email });
        if (isUser) {
            return res.status(401).json({ status: false, msg: 'User already exits!!' });
        } else {
            const emailToken = generateToken(email);
            await registerUserModel.create({ email, password });
            await sendVerificationMail(email, emailToken)
            return res.status(200).json({ status: true });
        }
    }catch (err){
        console.log(err);
        return res.status(500).json({ status: false, msg: 'Internal Server Error!!' });
    }

}

export async function me(req: Request, res: Response): Promise<Response> {
    try {
        const username = req.headers.username;
        return res.status(200).json({ status: true, username });
    }
    catch (ex) {
        console.log(ex);
        return res.status(500).json({ status: false, msg: 'Internal Server Error!!' });
    }
}
