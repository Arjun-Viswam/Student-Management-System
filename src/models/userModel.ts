import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    emailId: { type: String, required: true },
    department: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, required: true },
});

const User = mongoose.model("tb_user", userSchema);

export default User;
