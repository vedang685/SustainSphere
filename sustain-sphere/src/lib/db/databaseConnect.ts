let alreadyDone = false;
import mongoose, { ConnectOptions } from "mongoose";
require('dotenv').config();

export async function ensureDbConnected() {
    if (alreadyDone) {
        return;
    }
    alreadyDone = true;
    await mongoose.connect(process.env.MONGO_URL as string, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        dbName: "courses" } as ConnectOptions);
}
