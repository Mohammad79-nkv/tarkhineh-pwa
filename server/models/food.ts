import mongoose from "mongoose";

const foodSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  discount: Number,
  imgSrc: String,
  vote: {
    rate: Number,
    count: Number,
  },
  branches: Array<String>,
});

export default mongoose.models.Foods || mongoose.model("Foods", foodSchema);
