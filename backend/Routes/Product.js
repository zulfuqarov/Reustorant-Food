import express from "express";
import Product from "../model/Product.js";
import cloudinary from "cloudinary";

const router = express.Router();

router.post("/", async (req, res) => {
  const { name, description, price, subcategory } = req.body;
  const defaultImg =
    "https://orthomoda.ru/bitrix/templates/.default/img/no-photo.jpg";

  let picture =
    req.files && req.files.picture
      ? req.files.picture.tempFilePath
      : defaultImg;

  if (picture !== defaultImg) {
    picture = await cloudinary.uploader.upload(picture, {
      use_filename: true,
      folder: "Home",
    });
  }

  try {
    const newProduct = new Product({
      name,
      description,
      price,
      picture: picture !== defaultImg ? picture.url : picture,
      subcategory: JSON.parse(subcategory),
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
    const totalProducts = await Product.countDocuments({
      subcategory: id,
    });
    const productsBySubcategory = await Product.find({
      subcategory: id,
    }).populate({
      path: "subcategory",
      populate: {
        path: "category",
        model: "Category",
      },
    });
    res.status(200).json({
      productsBySubcategory,
      totalPages: Math.ceil(totalProducts / 6),
    });
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

router.put("/ProductUpdate/:_id", async (req, res) => {
  const { name, price, description } = req.body;
  const { _id } = req.params;
  const defaultImg =
    "https://orthomoda.ru/bitrix/templates/.default/img/no-photo.jpg";

  let picture =
    req.files && req.files.picture
      ? req.files.picture.tempFilePath
      : defaultImg;

  if (picture !== defaultImg) {
    picture = await cloudinary.uploader.upload(picture, {
      use_filename: true,
      folder: "Home",
    });
  }

  try {
    if (!name.trim() || !price || !description) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const updateProduct = await Product.findByIdAndUpdate(
      _id,
      {
        $set: {
          name,
          price,
          description,
          picture: picture !== defaultImg ? picture.url : picture,
        },
      },
      { new: true }
    ).populate({ path: "subcategory", populate: { path: "category" } });

    res
      .status(200)
      .json({ message: "Product has been updated!", updateProduct });
  } catch (error) {
    console.log(error);
  }
});

router.get("/", async (req, res) => {
  try {
    const totalProducts = await Product.countDocuments();
    const allProduct = await Product.find().populate("subcategory");
    res.status(200).json({
      allProduct,
      totalPages: Math.ceil(totalProducts / 6),
    });
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
