import dotenv from "dotenv"; // Load environment variables from .env file
dotenv.config({silent: true}); 
export const ENV = {
    PORT: process.env.PORT,
    DB_URL: process.env.DB_URL,
    NODE_ENV: process.env.NODE_ENV
}