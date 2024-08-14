import express from "express";
import Category from "./Routes/Category.js";
import SubCategory from "./Routes/SubCategory.js";

const router = express.Router();

router.use("/Category", Category);
router.use("/SubCategory", SubCategory);

export default router;
