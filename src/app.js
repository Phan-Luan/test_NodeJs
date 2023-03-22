import mongoose from "mongoose";
import express from "express";
import route from "./routes/product";
const app = express();
app.use(express.json());
app.use("/api", route);
mongoose.connect("mongodb://127.0.0.1:27017/we17301");

export const viteNodeApp = app;
