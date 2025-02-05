import { Request, Response } from "express";
import { listAlltask, udpateAsCompleted } from "../services/studentService";
import { AuthRequest } from "../utils/express";

const taskList = async (req: Request, res: Response) => {
    try {
        const page = parseInt(req.query.page as string) || 1;
        const limit = parseInt(req.query.limit as string) || 10;
        const search = req.query.search as string || "";
        const studentId = req.params.studentId as string
        const list = await listAlltask(studentId, page, limit, search);
        return res.json(list);
    } catch (error) {
        return res.status(500).json({ message: "Error fetching items", error });
    }
};

const markAsCompleted = async (req: AuthRequest, res: Response) => {
    try {
        const task = await udpateAsCompleted(req.params.taskId, req.user?.userId);
        if (task.matchedCount == 0) return res.status(404).json({ message: "Task not found" });
        return res.json({ message: "Task marked as completed" });
    } catch (error) {
        return res.status(500).json({ message: "Error updating Task", error });
    }
};

export {
    taskList,
    markAsCompleted,
}
