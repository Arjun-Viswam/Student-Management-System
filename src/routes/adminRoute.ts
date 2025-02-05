import express from "express";
import { addStudent, createTask } from "../controllers/adminController";
import catchAsync from "../utils/catchAsync";
import { authenticateUser } from "../middlewares/authMiddleware";
import { authorizeRoles } from "../middlewares/authorize";

const router = express.Router();

router.post("/addStudent", authenticateUser, authorizeRoles("admin"), catchAsync(addStudent));
router.post("/assignTask", authenticateUser, authorizeRoles("admin"), catchAsync(createTask));

export default router;
