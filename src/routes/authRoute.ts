import express from "express";
import { login, getAccessToken } from "../controllers/authController";
import catchAsync from "../utils/catchAsync";

const router = express.Router();

router.post("/login", catchAsync(login));
router.get("/accessToken/:refreshToken", catchAsync(getAccessToken));

export default router;
