"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerInput = exports.signinInput = exports.signupInput = void 0;
const zod_1 = require("zod");
exports.signupInput = zod_1.z.object({
    email: zod_1.z.string().max(100).min(3),
    password: zod_1.z.string().max(30).min(8),
    detailsFilled: zod_1.z.boolean()
});
exports.signinInput = zod_1.z.object({
    email: zod_1.z.string().max(100).min(3),
    password: zod_1.z.string()
});
exports.registerInput = zod_1.z.object({
    email: zod_1.z.string().max(100).min(3),
    password: zod_1.z.string().max(30).min(8),
});
