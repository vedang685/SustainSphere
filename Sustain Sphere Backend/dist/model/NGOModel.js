"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const ngoSchema = new mongoose_1.default.Schema({
    email: {
        type: String,
        require: true,
    },
    ngoName: {
        type: String,
        require: true,
    },
});
const NGOModel = mongoose_1.default.model('NGOs', ngoSchema);
exports.default = NGOModel;
