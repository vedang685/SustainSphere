"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const registerUserSchema = new mongoose_1.default.Schema({
    email: String,
    password: String,
    verificationToken: String,
});
const registerUserModel = mongoose_1.default.model('TempUsers', registerUserSchema);
exports.default = registerUserModel;
