import mongoose, { Schema, model } from "mongoose";

const ProductSchema = new Schema({
    id: { type: Number, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    imageSrc: { type: String, required: true },
    discountedPrice: { type: Number, required: false },
    manufacturerId: { type: Number, required: true, ref: "Manufacturer" },
    category: { type: String, required: true },
    price: { type: Number, required: true },
    specifications: {
        manufacturerLink: { type: String, required: true },
        warrantyYears: { type: Number, required: true },
        deliveryFee: { type: String, required: true },
        deliveryTime: { type: String, required: true },
        cardSurcharges: { type: String, required: true },
    },
});

export default model("Product", ProductSchema);
