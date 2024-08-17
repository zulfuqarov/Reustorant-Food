import express from "express";
import Product from "../model/Product.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { name, description, price, picture, subcategory } = req.body;
    const newProduct = new Product({
      name,
      description,
      price,
      picture,
      subcategory,
    });
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    console.log(error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const productsBySubcategory = await Product.find({
      subcategory: id,
    }).populate({
      path: "subcategory",
      populate: {
        path: "category",
        model: "Category",
      },
    });
    res.status(200).json(productsBySubcategory);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

router.post("/ProductPush/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { subcategory } = req.body;
    const product = await Product.findByIdAndUpdate(
      id,
      {
        $addToSet: { subcategory },
      },
      { new: true }
    ).populate("subcategory");
    res.json(product);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

router.post("/ProductPull/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { subcategory } = req.body;
    const product = await Product.findByIdAndUpdate(
      id,
      {
        $pull: { subcategory: { $in: subcategory } },
      },
      { new: true }
    ).populate("subcategory");
    res.json(product);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const allProduct = await Product.find().populate("subcategory");
    res.status(200).json(allProduct);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletingProduct = await Product.findByIdAndDelete(id);
    res.json(deletingProduct);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});
export default router;
