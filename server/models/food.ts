import mongoose from "mongoose";

const foodSchema = new mongoose.Schema({
    title :{
        type: String,
        unique: false,
    }
})