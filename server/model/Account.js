import mongoose, { Schema, model } from "mongoose";
import {ObjectId} from "mongodb";

const AccountSchema = new Schema({
    id: ObjectId,
    accountDetails: {
        username: { type: String, required: true },
        email: { type: String, required: true },
        password: { type: String, required: true },
    }
});

export default model("AccountSchema", AccountSchema);