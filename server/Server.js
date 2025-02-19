import mongoose, { Schema, model } from "mongoose";
import express from "express";
import { rateLimit } from "express-rate-limit";
import cors from "cors";
import fs from "fs";
import Manufacturer from "./model/Manufacturer.js";
import Product from "./model/Products.js";
import dotenv from "dotenv";
import path from "path";
import {fileURLToPath} from "url";
dotenv.config({path: "./Server/.env"});


const app = express();
const limiter = rateLimit({
    windowMs: 60 * 1000,
    limit: 75,
});

app.use(express.json());
app.use(cors({
    origin: true,
}));

app.use(express.static(path.join(__dirname, 'dist')));


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, 'dist')));

app.use(limiter);

const API_KEY = process.env.MONGO_DB_KEY;
const uri = `mongodb+srv://randomacc12411:${API_KEY}@cluster0.y0nio.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// ImportData into "mongodb" using fs.
async function importData() {
    try {
        const rawData = fs.readFileSync("./server/data/db.json", "utf8");
        const data = JSON.parse(rawData);

        console.log("Importing data...");

        for (const manufacturer of data.manufacturers) {
            const existingManufacturer = await Manufacturer.findOne({ id: manufacturer.id });

            if (!existingManufacturer) {
                await Manufacturer.create(manufacturer);
                console.log(`Manufacturer ${manufacturer.name} imported successfully.`);
            } else {
                console.log(`Manufacturer ${manufacturer.name} already exists. Skipping...`);
            }
        }

        for (const product of data.products) {
            const existingProduct = await Product.findOne({ id: product.id });

            if (!existingProduct) {
                await Product.create(product);
                console.log(`Product ${product.title} imported successfully.`);
            } else {
                console.log(`Product ${product.title} already exists. Skipping...`);
            }
        }

    } catch (error) {
        console.error("Error importing data:", error);
    }
}

// When Run is called, it will connect to the db.
async function run() {
    try {
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 50000
        });
        console.log("Connected to MongoDB");

        await importData();
    } catch (error) {
        console.error("Error:", error);
    }
}

run().then(r => console.log(r));

// All GET routes to retrieve relevant data
app.get("/products", async (req, res) => {
    try {
        const data = await Product.find({});
        return res.json(data);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: 'Error fetching products' });
    }
});

app.get("/manufacturer", async (req, res) => {
    try {
        const data = await Manufacturer.find({});
        return res.json(data);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: 'Error fetching manufacturers' });
    }
});



// In case of if its terminated externally via ctrl + c  then disconnect from MongoDB.
const signalHandler = async (signal)  => {
    await mongoose.disconnect();
    console.log("MongoDB disconnected successfully." + signal);
    process.exit(0);
}

["SIGINT", "SIGTERM", "SIGQUIT"].forEach(signal => process.on(signal, signalHandler))


app.listen(3000, "0.0.0.0", () => {
    console.log("Running on port: http://localhost:3000 ");
});