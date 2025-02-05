import Joi from "joi";

export const taskValidationSchema = Joi.object({
    studentId: Joi.string().required().messages({
        "string.empty": "Student ID is required",
    }),

    taskName: Joi.string().min(3).max(50).trim().required().messages({
        "string.empty": "Task name is required",
        "string.min": "Task name must be at least 3 characters",
        "string.max": "Task name cannot exceed 50 characters",
    }),

    taskDescription: Joi.string().min(10).trim().required().messages({
        "string.empty": "Task description is required",
        "string.min": "Task description must be at least 10 characters",
    }),

    dueDate: Joi.date().greater("now").required().messages({
        "date.base": "Due date must be a valid date",
        "date.greater": "Due date must be in the future",
    }),
});

