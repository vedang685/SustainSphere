"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = exports.generateToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
function generateToken(userId) {
    const expirationTime = Math.floor(Date.now() / 1000) + 86400; // 1 day in seconds
    const payload = {
        user_id: userId,
        exp: expirationTime,
    };
    return jsonwebtoken_1.default.sign(payload, "${process.env.EMAIL_JWT_TOKEN}", { algorithm: 'HS256' });
}
exports.generateToken = generateToken;
function verifyToken(token) {
    try {
        jsonwebtoken_1.default.verify(token, "${process.env.EMAIL_JWT_TOKEN}", { algorithms: ['HS256'] });
        return true;
    }
    catch (err) {
        return false;
    }
}
exports.verifyToken = verifyToken;
