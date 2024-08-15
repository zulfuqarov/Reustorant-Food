import mongoose from "mongoose";

const Subcategory = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  category: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
    },
  ],
});

export default mongoose.model("Subcategory", Subcategory);
