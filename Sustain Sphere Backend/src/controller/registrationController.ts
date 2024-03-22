import { Request, Response } from "express";
import userModel from "../model/UserModel";
import individualRegistrationModel from "../model/IndividualRegistrationModel";

export async function fillIndividualDetails(req: Request, res: Response): Promise<Response> {
    try {
        const email = req.headers.email;
        const isUser = await userModel.findOne({ email });

        if (!isUser) {
            return res.status(401).json({ status: false, msg: 'Invalid User!!' });
        }

        const {
            profilePhoto,
            fullName,
            country,
            state,
            address,
            occupation,
            joiningReason
        } = req.body;

        // Check if there is already an entry for the user
        const existingEntry = await individualRegistrationModel.findOne({ email: isUser._id });

        if (existingEntry) {
            // Update the existing entry with the new data
            await individualRegistrationModel.updateOne(
                { email: isUser._id },
                {
                    $set: {
                        profilePhoto,
                        fullName,
                        country,
                        state,
                        address,
                        occupation,
                        joiningReason
                    }
                }
            );
        } else {
            // Create a new entry if it doesn't exist
            await individualRegistrationModel.create({
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
    } catch (ex) {
        console.error(ex);
        return res.status(500).json({ status: false, msg: 'Internal Server Error!!' });
    }
}
