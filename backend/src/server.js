import express from "express";
import {ENV} from "./lib/ENV.js";
import path from "path";
import { connect } from "http2";
import { connectdb } from "./lib/db.js";
 const app = express()
   

 const __dirname = path.resolve()
 app.get("/health", (req,res) => {
    res.status(200).json({msg:"api is up and running"})
 });
    app.get("/books", (req,res) => {
    res.status(200).json({msg:"djjj"})

 });

 if(ENV.NODE_ENV === "production"){
   app.use(express.static(path.join(__dirname,"../frontend/dist")))

   app.get("/{*any}", (req,res) => {
      res.sendFile(path.join(__dirname,"../frontend/dist/index.html"));
   });
 }
 
const startserver = async() => {
   try {
      await connectdb();
      app.listen(ENV.PORT, () => {
   console.log(`Server is running on port ${ENV.PORT}`);
});

   }catch (error) {
      console.error("Error starting the server:", error);
      process.exit(1);
   }
}
startserver();