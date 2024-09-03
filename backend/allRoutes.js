import express from "express";
import Category from "./Routes/Category.js";
import SubCategory from "./Routes/SubCategory.js";
import Product from "./Routes/Product.js";
import Auth from "./Routes/Auth.js";

const router = express.Router();

router.use("/Category", Category);
router.use("/SubCategory", SubCategory);
router.use("/Product", Product);
router.use("/Auth", Auth);

export default router;
