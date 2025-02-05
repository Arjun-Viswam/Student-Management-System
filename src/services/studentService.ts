import { Types } from "mongoose";
import Task from "../models/taskModel";

const listAlltask = async (studentId: string, currentPage: number, pageSize: number, search: String) => {
    const query: any = { studentId: new Types.ObjectId(studentId) };
    if (search && search.trim() !== "") {
        query.$or = [
            { taskName: { $regex: search, $options: "i" } },
            { taskDescription: { $regex: search, $options: "i" } }
        ];
    }
    const currentDate = new Date();
    const tasks = await Task.aggregate([
        { $match: query },
        {
            $addFields: {
                status: {
                    $cond: {
                        if: { $eq: ["$status", "completed"] },
                        then: "Completed",
                        else: {
                            $cond: {
                                if: { $lt: ["$dueDate", currentDate] },
                                then: "Overdue",
                                else: "Pending",
                            },
                        },
                    },

                },
            },
        },
        {
            $project: {
                taskName: 1,
                taskDescription: 1,
                dueDate: 1,
                status: 1,
            },
        },
        { $sort: { dueDate: 1 } },
        { $skip: (currentPage - 1) * pageSize },
        { $limit: pageSize },
    ]);

    const totalTasks = await Task.countDocuments(query);
    return {
        tasks, totalTasks
    }
};

const udpateAsCompleted = async (taskId: string, studentId: any) => {
    return await Task.updateOne({ _id: taskId, studentId: studentId }, { status: 'completed' })
}

export {
    listAlltask,
    udpateAsCompleted
}
