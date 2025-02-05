import { Request, Response } from "express";
import { createStudent, assignTask } from "../services/adminService";
import { studentSchema } from "../validations/studentValidation";
import { taskValidationSchema } from "../validations/taskValidation";

const addStudent = async (req: Request, res: Response) => {
    try {
        const { error } = studentSchema.validate(req.body);
        if (error) {
            return res.status(400).json({ message: error.details[0].message });
        }
        const student = await createStudent(req.body);
        if (student) {
            return res.status(201).json({ message: "User registered successfully", result: student });
        }
        return res.status(400).json({ message: "Email already exist" });
    } catch (error) {
        return res.status(500).json({ message: "Error creating user", error });
    }
};

const createTask = async (req: Request, res: Response) => {
    try {
        const { error } = taskValidationSchema.validate(req.body);
        if (error) {
            return res.status(400).json({ message: error.details[0].message });
        }
        const student = await assignTask(req.body);
        if (student) {
            return res.status(201).json({ message: "Task assigned successfully", result: student });
        }
        return res.status(400).json({ message: "No such student exist" });
    } catch (error) {
        return res.status(500).json({ message: "Error creating task", error });
    }
};

export {
    addStudent,
    createTask
}