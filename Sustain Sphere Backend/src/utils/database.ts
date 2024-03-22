import mongoose from 'mongoose'
export function dbconnect() {
    //console.log("connecting to :", process.env.MONGO_DB_URL);
    if ( !process.env.MONGO_DB_URL) {
        throw Error("No Mongo Uri in .env");
    }
    mongoose.connect(process.env.MONGO_DB_URL)
        .then( () => {
            console.log("DB connection success!");
        })
        .catch( e => {
            console.log(e);
        });
}
