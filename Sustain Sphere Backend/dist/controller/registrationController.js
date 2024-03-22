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
exports.fillIndividualDetails = void 0;
const UserModel_1 = __importDefault(require("../model/UserModel"));
const IndividualRegistrationModel_1 = __importDefault(require("../model/IndividualRegistrationModel"));
function fillIndividualDetails(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const email = req.headers.email;
            const isUser = yield UserModel_1.default.findOne({ email });
            if (!isUser) {
                return res.status(401).json({ status: false, msg: 'Invalid User!!' });
            }
            const { profilePhoto, fullName, country, state, address, occupation, joiningReason } = req.body;
            // Check if there is already an entry for the user
            const existingEntry = yield IndividualRegistrationModel_1.default.findOne({ email: isUser._id });
            if (existingEntry) {
                // Update the existing entry with the new data
                yield IndividualRegistrationModel_1.default.updateOne({ email: isUser._id }, {
                    $set: {
                        profilePhoto,
                        fullName,
                        country,
                        state,
                        address,
                        occupation,
                        joiningReason
                    }
                });
            }
            else {
                // Create a new entry if it doesn't exist
                yield IndividualRegistrationModel_1.default.create({
                    profilePhoto,
                    fullName,
                    country,
                    state,
                    address,
                    occupation,
                    joiningReason,
                    email: isUser._id
                });
            }
            return res.status(200).json({ status: true });
        }
        catch (ex) {
            console.error(ex);
            return res.status(500).json({ status: false, msg: 'Internal Server Error!!' });
        }
    });
}
exports.fillIndividualDetails = fillIndividualDetails;
