import express from "express";
import Category from "../model/Category.js";
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { name } = req.body;
    const newCategory = new Category({ name });
    await newCategory.save();
    res.status(201).json(newCategory);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error.message });
  }
});

router.post("/Update/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    const updateCategory = await Category.findByIdAndUpdate(
      id,
      {
        $set: { name },
      },
      { new: true }
    );
    res.json(updateCategory);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteCategory = await Category.findByIdAndDelete(id);
    res.json(deleteCategory);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const CategoryAll = await Category.find();
    res.json(CategoryAll);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

export default router;
