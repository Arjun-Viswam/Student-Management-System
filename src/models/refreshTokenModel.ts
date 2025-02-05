import mongoose from "mongoose";

const refreshTokenSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    token: { type: String, required: true }
});

const RefreshToken = mongoose.model("tb_refresh_token", refreshTokenSchema);

export default RefreshToken;
