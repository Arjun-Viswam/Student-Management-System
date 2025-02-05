import bcrypt from "bcrypt";
import User from "../models/userModel";
import Task from "../models/taskModel";
import { Types } from "mongoose";
const salt = 12

const createStudent = async (body: any) => {
    const isExisting = await User.findOne({ emailId: body.emailId })
    if (isExisting) {
        return 0
    }
    const payload = {
        name: body.name,
        emailId: body.emailId,
        role: 'student',
        department: body.department,
        password: await bcrypt.hash(body.password, salt),
    }
    return await new User(payload).save();
};

const assignTask = async (body: any) => {
    const studentId: string = body.studentId
    const student = await User.findOne({ _id: new Types.ObjectId(studentId), role: 'student' })
    if (student) {
        const payload = {
            studentId: studentId,
            taskName: body.taskName,
            taskDescription: body.taskDescription,
            dueDate: new Date(body.dueDate),
            status: 'pending'
        }
        return await new Task(payload).save();
    }
    return 0
};

export {
    createStudent,
    assignTask
}