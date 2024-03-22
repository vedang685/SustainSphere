"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbconnect = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
function dbconnect() {
    //console.log("connecting to :", process.env.MONGO_DB_URL);
    if (!process.env.MONGO_DB_URL) {
        throw Error("No Mongo Uri in .env");
    }
    mongoose_1.default.connect(process.env.MONGO_DB_URL)
        .then(() => {
        console.log("DB connection success!");
    })
        .catch(e => {
        console.log(e);
    });
}
exports.dbconnect = dbconnect;
