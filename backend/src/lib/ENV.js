import dotenv from "dotenv"; // Load environment variables from .env file
dotenv.config(); // Load environment variables from .env fil
export const ENV = {
    PORT: process.env.PORT,
    DB_URL: process.env.DB_URL
}