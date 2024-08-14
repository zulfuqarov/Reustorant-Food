import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import { v2 as cloudinary } from "cloudinary";
import fileUpload from "express-fileupload";
import cors from "cors";
import allCategory from "./allRoutes.js";

dotenv.config();

const Port = process.env.PORT;

const ConnectingMongoDb = async () => {
  try {
    await mongoose.connect(process.env.CONNECTING_MONGO_DB);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log(error);
  }
};

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET_KEY,
});

const server = express();

server.use(express.json());
server.use(cookieParser());
server.use(cors());
server.use(fileUpload({ useTempFiles: true }));

server.use("/api", allCategory);

server.listen(Port, async () => {
  try {
    await ConnectingMongoDb();
    console.log(`http://localhost:${Port}`);
  } catch (error) {
    console.log(error);
  }
});
