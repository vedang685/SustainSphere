"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.protect = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
function protect(req, res, next) {
    var _a;
    const secretKey = process.env.SECRET;
    const token = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(' ')[1];
    if (!secretKey) {
        return res.status(500).json({ status: false, msg: 'Internal Server Error' });
    }
    if (!token) {
        return res.status(401).json({ status: false, msg: 'No Token Provided' });
    }
    jsonwebtoken_1.default.verify(token, secretKey, (err, decoded) => {
        if (err) {
            return res.status(403).json({ status: false, msg: 'Failed To Authorize' });
        }
        if (!decoded || typeof decoded !== 'object' || !decoded.username) {
            return res.status(403).json({ status: false, msg: 'Invalid Token Format' });
        }
        req.headers.username = decoded.username;
        next();
    });
}
exports.protect = protect;
