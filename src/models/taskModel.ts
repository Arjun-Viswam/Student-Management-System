import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    studentId: { type: mongoose.Schema.Types.ObjectId, required: true },
    taskName: { type: String, required: true },
    taskDescription: { type: String, required: true },
    dueDate: { type: Date, required: true },
    status: { type: String, enum: ['pending', 'overdue', 'completed'], default: 'pending' },
});

const Task = mongoose.model("tb_task", taskSchema);

export default Task;
