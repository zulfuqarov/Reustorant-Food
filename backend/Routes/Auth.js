import express from "express";
import bcrypt from "bcrypt";
import Auth from "../model/Auth.js";
import jwt from "jsonwebtoken";
import authenticateToken from "../Middleware/CheckToken.js";
const router = express.Router();

router.post("/Register", async (req, res) => {
  try {
    const { userName, email, password } = req.body;
    if (!userName || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existingUser = await Auth.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new Auth({
      userName,
      email,
      password: hashedPassword,
      role: "user",
    });
    await newUser.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.log(error);
  }
});

router.post("/Sign", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const user = await Auth.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    if (isMatch) {
      const payload = {
        sub: user._id,
        role: user.role,
      };

      const jwtToken = jwt.sign(payload, process.env.TOKEN_SECRET_CODE, {
        expiresIn: "3d",
      });

      res.cookie("jwtToken", jwtToken, {
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24 * 3, // 3 gün
      });

      res.status(200).json({
        message: "Your login has been successfully completed",
        jwtToken,
      });
    }
  } catch (error) {
    console.log(error);
  }
});

router.get("/CheckUser",authenticateToken('user'), async (req, res) => {
  try {
    const userId = req.userId
    const user = await Auth.findById(userId).select("-password -email")
    res.json(user)
  } catch (error) {
    console.log(error);
  }
});

export default router;
