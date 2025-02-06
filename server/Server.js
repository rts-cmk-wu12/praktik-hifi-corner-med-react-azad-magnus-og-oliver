import mongoose, { Schema, model } from "mongoose";
import express from "express";
import {rateLimit} from "express-rate-limit";
import cors from "cors";
import "dotenv/config.js";

const app = express();
const limiter = rateLimit({
    windowMs: 1000,
    max: 1000,
    limit: 100,
})

app.use(express.json());
app.use(cors({
    origin: true,
}))
app.use(limiter)


const API_KEY = process.env.MONGO_DB_KEY;

const uri = `mongodb+srv://randomacc12411:${API_KEY}@cluster0.y0nio.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const ProductSchema = new Schema({
    title: String,
    description: String,
    price: Number,
});

const Product = model("Product", ProductSchema); // Define the model outside

async function run() {
    try {
        await mongoose.connect(uri);
        console.log("Connected to MongoDB");

        const newProduct = new Product({
            title: "whatever product",
            description: "example product",
            price: 19.99,
        });

        const savedProduct = await newProduct.save();
        console.log("Product saved:", savedProduct);
    } catch (error) {
        console.error("Error:", error);
    } finally {
        await mongoose.disconnect(); // Disconnect after operation
    }
}

run();
