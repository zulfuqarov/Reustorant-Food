import mongoose from "mongoose";

const Product = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  picture: {
    type: String,
  },
  subcategory: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Subcategory",
      required: true,
    },
  ],
});

export default mongoose.model("Product", Product);
