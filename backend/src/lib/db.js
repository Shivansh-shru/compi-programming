import mongoose from "mongoose";

import {ENV} from "./ENV.js";
export const connectdb = async() => {
   try {
    const conn = await mongoose.connect(ENV.DB_URL);
    console.log(`MongoDB connected: ${conn.connection.host}`);
   } catch (error) {
    console.error("Error connecting to the database:", error);
    process.exit(1);
   }

}