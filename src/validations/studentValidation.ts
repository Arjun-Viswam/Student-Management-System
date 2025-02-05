import Joi from "joi";

export const studentSchema = Joi.object({
    name: Joi.string().min(3).max(50).required().messages({
        "string.base": "Name should be a string.",
        "string.empty": "Name cannot be empty.",
        "string.min": "Name should have at least 3 characters.",
        "string.max": "Name should have at most 10 characters.",
        "any.required": "Name is required."
    }),
    emailId: Joi.string().email().required().messages({
        "string.email": "Invalid email format.",
        "any.required": "Email is required."
    }),
    department: Joi.string().min(3).max(50).required().messages({
        "string.base": "department should be a string.",
        "string.empty": "department cannot be empty.",
        "string.min": "department should have at least 3 characters.",
        "string.max": "department should have at most 20 characters.",
        "any.required": "department is required."
    }),
    password: Joi.string()
    .min(8)
    .max(20)
    .pattern(new RegExp("^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d@$!%*?&]+$"))
    .required()
    .messages({
        "string.min": "Password must be at least 8 characters long.",
        "string.max": "Password must be at most 20 characters long.",
        "string.pattern.base": "Password must contain at least one letter and one number.",
        "any.required": "Password is required."
    })
});
