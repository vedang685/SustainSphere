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
exports.me = exports.registerNewUser = exports.detailsFilled = exports.signin = void 0;
const UserModel_1 = __importDefault(require("../model/UserModel"));
const passwordHashing_1 = require("../utils/passwordHashing");
const jwt = require("jsonwebtoken");
const ZodTypes_1 = require("../types/ZodTypes");
const VerifyEmail_1 = require("../middleware/VerifyEmail");
const RegisterUserModel_1 = __importDefault(require("../model/RegisterUserModel"));
const jwtToken_1 = require("../utils/jwtToken");
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
function signin(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const parsedResponse = ZodTypes_1.signinInput.safeParse(req.body);
            if (!parsedResponse.success) {
                return res.status(401).json({
                    status: false,
                    msg: 'Invalid Input',
                });
            }
            const { email, password } = req.body;
            const user = yield UserModel_1.default.findOne({ email });
            if (!user) {
                return res.status(401).json({ status: false, msg: 'Invalid Username Or Password' });
            }
            if (password !== user.password) {
                return res.status(401).json({ status: false, msg: 'Invalid Username Or Password' });
            }
            // Verify the provided password against the hashed password
            const isPasswordValid = (0, passwordHashing_1.verifyPassword)(password, user.password);
            if (!isPasswordValid) {
                return res.status(401).json({ status: false, msg: 'Invalid Username Or Password' });
            }
            if (!process.env.SECRET) {
                return res.status(500);
            }
            const token = jwt.sign({ email }, process.env.SECRET);
            return res.status(200).json({ token, status: true, email });
        }
        catch (ex) {
            console.log(ex);
            return res.status(500).json({ status: false, msg: 'Internal Server Error!!' });
        }
    });
}
exports.signin = signin;
function detailsFilled(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const email = req.body.email;
            if (!email) {
                return res.status(401).json({ status: false, msg: 'Invalid' });
            }
            const isUser = yield UserModel_1.default.findOne({ email });
            if (!isUser) {
                return res.status(401).json({ status: false, msg: 'Error' });
            }
            else {
                return res.status(200).json(isUser.detailsFilled);
            }
        }
        catch (ex) {
            console.log(ex);
            return res.status(500).json({ status: false, msg: 'Internal Server Error!!' });
        }
    });
}
exports.detailsFilled = detailsFilled;
function registerNewUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const parsedResponse = ZodTypes_1.registerInput.safeParse(req.body);
            if (!parsedResponse.success) {
                return res.status(401).json({
                    status: false,
                    msg: 'Invalid Input',
                });
            }
            const { email, password } = req.body;
            if (!process.env.SECRET)
                return res.status(500);
            const isUser = yield UserModel_1.default.findOne({ email });
            if (isUser) {
                return res.status(401).json({ status: false, msg: 'User already exits!!' });
            }
            else {
                const emailToken = (0, jwtToken_1.generateToken)(email);
                yield RegisterUserModel_1.default.create({ email, password });
                yield (0, VerifyEmail_1.sendVerificationMail)(email, emailToken);
                return res.status(200).json({ status: true });
            }
        }
        catch (err) {
            console.log(err);
            return res.status(500).json({ status: false, msg: 'Internal Server Error!!' });
        }
    });
}
exports.registerNewUser = registerNewUser;
function me(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const username = req.headers.username;
            return res.status(200).json({ status: true, username });
        }
        catch (ex) {
            console.log(ex);
            return res.status(500).json({ status: false, msg: 'Internal Server Error!!' });
        }
    });
}
exports.me = me;
