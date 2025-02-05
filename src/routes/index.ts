import express from "express";
import userRoutes from "./studentRoute";
import authRoutes from "./authRoute";
import adminRoutes from "./adminRoute";

const router = express.Router();

router.use("/auth", authRoutes);
router.use("/admin", adminRoutes);
router.use("/student", userRoutes);

export default router;
