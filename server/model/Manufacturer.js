import mongoose, { Schema, model } from "mongoose";

const ManufacturerSchema = new Schema({
    id: { type: Number, required: true },
    name: { type: String, required: true },
});

export default model("Manufacturer", ManufacturerSchema);
