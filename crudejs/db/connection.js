import { log } from "console";
import mongoose from "mongoose";

const connectData = async (database_url) => {
    try {
        let database_name = {
            dbName: "ducat"
        }
        await mongoose.connect(database_url, database_name);
        console.log("connection connect");
    }
    catch (err) {
        console.log(err);
    }
}
export default connectData