import "dotenv/config";
import { connect } from "mongoose";

async function dbConnect(): Promise<void> {
    const DB_URI = <string>process.env.DB_URI; 

    try {
        await connect(DB_URI);
        console.log(`Connected to MongoDB at ${DB_URI}`);
    } catch (error) {
        console.error(`Error connecting to MongoDB: ${error}`);
    }
}

export default dbConnect;
