import express from "express";
import { markAsCompleted, taskList } from "../controllers/studentController";
import catchAsync from "../utils/catchAsync";
import { authenticateUser } from "../middlewares/authMiddleware";

const router = express.Router();

router.get("/tasks/:studentId", authenticateUser, catchAsync(taskList));
router.patch("/markAsCompleted/:taskId", authenticateUser, catchAsync(markAsCompleted));

export default router;
