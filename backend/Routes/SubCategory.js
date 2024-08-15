import express from "express";
import Subcategory from "../model/Subcategory.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { name, category } = req.body;
    const subcategory = new Subcategory({ category, name });
    await subcategory.save();
    res.status(201).json(subcategory);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "An error occurred while creating the reservation." });
  }
});

router.post("/categoryPull/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    const { id } = req.body;

    const subcategory = await Subcategory.findByIdAndUpdate(
      _id,
      {
        $pull: { category: { $in: id } },
      },
      { new: true }
    );

    res.json(subcategory);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

router.post("/categoryPush/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    const { id } = req.body;

    const subcategory = await Subcategory.findByIdAndUpdate(
      _id,
      {
        $push: { category: id },
      },
      { new: true }
    );
    res.json(subcategory);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

router.get("/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    const subcategory = await Subcategory.find({
      category: _id,
    }).populate("category");
    res.status(200).json(subcategory);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "An error occurred while fetching subcategory." });
  }
});

router.get("/", async (req, res) => {
  try {
    const subCategoryAll = await Subcategory.find().populate("category");
    res.json(subCategoryAll);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "An error occurred while fetching subcategories." });
  }
});

router.delete("/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    const deletingSubCategory = await Subcategory.findByIdAndDelete(_id);
    res.json(deletingSubCategory);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

export default router;
