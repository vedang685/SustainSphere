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
exports.verifyEmail = exports.sendVerificationMail = void 0;
const RegisterUserModel_1 = __importDefault(require("../model/RegisterUserModel"));
const jwt = require("jsonwebtoken");
const UserModel_1 = __importDefault(require("../model/UserModel"));
const jwtToken_1 = require("../utils/jwtToken");
require('dotenv').config();
const nodemailer = require('nodemailer');
const { google } = require('googleapis');
const OAuth2 = google.auth.OAuth2;
const OAuth2_client = new OAuth2(process.env.GOOGLE_CLIENT_ID, process.env.GOOGLE_CLIENT_SECRET);
OAuth2_client.setCredentials({ refresh_token: process.env.OAUTH_REFRESH_TOKEN });
function sendVerificationMail(email, token) {
    return __awaiter(this, void 0, void 0, function* () {
        const accessToken = OAuth2_client.getAccessToken();
        const transport = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                type: 'OAuth2',
                user: process.env.MAIL_USERNAME,
                clientId: process.env.GOOGLE_CLIENT_ID,
                clientSecret: process.env.GOOGLE_CLIENT_SECRET,
                refreshToken: process.env.OAUTH_REFRESH_TOKEN,
                accessToken: accessToken
            }
        });
        const mailOptions = {
            from: 'SustainSphere <$mailtoashish693@gmail.com>',
            to: email,
            subject: 'Verify your email to start using SustainSphere',
            mimetype: 'text/html',
            html: htmlVerificationMessage(email, token, process.env.EMAIL_VERIFICATION_API),
        };
        try {
            const result = yield transport.sendMail(mailOptions);
            console.log(result);
        }
        catch (err) {
            console.error(err);
        }
        finally {
            transport.close();
        }
    });
}
exports.sendVerificationMail = sendVerificationMail;
function verifyEmail(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const verificationToken = req.query.verificationToken;
            const email = req.query.email;
            if (!verificationToken) {
                return res.status(400).json({ status: false, msg: 'Token is missing!' });
            }
            const user = yield UserModel_1.default.findOne({ email });
            if (user) {
                return res.status(400).json({ status: false, msg: 'Already verified' });
            }
            if (!process.env.SECRET)
                return res.status(500);
            if (!(0, jwtToken_1.verifyToken)(verificationToken)) {
                return res.status(401).json({ status: false, msg: 'Invalid token.' });
            }
            const userEmail = yield RegisterUserModel_1.default.findOne({ email });
            if (userEmail) {
                const { email, password } = userEmail;
                yield UserModel_1.default.create({ email, password, detailsFilled: false });
            }
            else {
                return res.status(404).json({ status: false, msg: 'Database Error!!' });
            }
            return res.status(200).send(htmlRegistrationMessage());
        }
        catch (ex) {
            console.log(ex);
            return res.status(500).json({ status: false, msg: 'Internal Server Error!!' });
        }
    });
}
exports.verifyEmail = verifyEmail;
function htmlRegistrationMessage() {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registration Successful</title>
    <style>
        body {
            margin: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            background-color: #f4f4f4;
        }
        .button {
            background-color: #007bff;
            color: #fff;
            padding: 10px 20px;
            border: none;
            border-radius: 10px;
            cursor: pointer;
        }

        .card {
            background-color: #f0f0f0;
            border-radius: 10px;
            padding: 20px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            text-align: center;
        }
    </style>
</head>
<body>
<div class="card">
    <h2>Registration Successful</h2>
    <p>You have successfully verified your email.</p>
    <p>Please close this page and Signin</p>
    <button class="button" id="closeButton">Close Page</button>
    <script>
        const closeButton = document.getElementById('closeButton');
        closeButton.addEventListener('click', () => {
            window.close();
        });
    </script>
</div>
</body>
</html>`;
}
function htmlVerificationMessage(email, token, verificationAPI) {
    const encodedToken = encodeURIComponent(token);
    const encodedEmail = encodeURIComponent(email);
    return `
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Please activate your account</title>
  <!--[if mso]><style type="text/css">body, table, td, a { font-family: Arial, Helvetica, sans-serif !important; }</style><![endif]-->
</head>

<body style="font-family: Helvetica, Arial, sans-serif; margin: 0px; padding: 0px; background-color: #ffffff;">
<table role="presentation"
       style="width: 100%; border-collapse: collapse; border: 0px; border-spacing: 0px; font-family: Arial, Helvetica, sans-serif; background-color: rgb(239, 239, 239);">
  <tbody>
  <tr>
    <td align="center" style="padding: 1rem 2rem; vertical-align: top; width: 100%;">
      <table role="presentation" style="max-width: 600px; border-collapse: collapse; border: 0px; border-spacing: 0px; text-align: left;">
        <tbody>
        <tr>
          <td style="padding: 40px 0px 0px;">
            <div style="text-align: center;">
              <div style="padding-bottom: 20px;"><img src="https://i.ibb.co/Qbnj4mz/logo.png" alt="SustainSphere" style="width: 150px;">
              </div>
            </div>
            <div style="padding: 20px; background-color: rgb(255, 255, 255);">
              <div style="color: rgb(0, 0, 0); text-align: center;">
                <h1 style="margin: 1rem 0">SustainSphere</h1>
                <h2>Final step...</h2>
                <p style="padding-bottom: 16px">Follow this link to verify your email address.</p>
                <p 
                style="padding-bottom: 16px"><a href="${process.env.BASE_URL}api/auth/verifyEmail?verificationToken=${token}&email=${email}" target="_blank"
                style="padding: 12px 24px; border-radius: 4px; color: #FFF; background: #2B52F5;
                display: inline-block;
                margin: 0.5rem 0; text-decoration: none;">Verify Now</a></p>
                <p style="padding-bottom: 16px">If you didn’t ask to verify this address, you can ignore this email.</p>
                <p style="padding-bottom: 16px">Thanks,The SustainSphere team</p>
              </div>
            </div>
            <div style="padding-top: 20px; color: rgb(153, 153, 153); text-align: center;">
              <p style="padding-bottom: 16px">Made with ♥ by criticalAY</p>
            </div>
          </td>
        </tr>
        </tbody>
      </table>
    </td>
  </tr>
  </tbody>
</table>
</body>

</html>

  `;
}
