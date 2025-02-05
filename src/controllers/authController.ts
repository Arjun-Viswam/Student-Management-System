import { Request, Response } from "express";
import { generateAccessToken, generateRefreshToken, verifyRefreshToken } from "../utils/jwt";
import { findByEmail, getRefreshToken, saveRefreshToken } from "../services/authService";
import bcrypt from "bcrypt";

const login = async (req: Request, res: Response): Promise<Response>  => {
    try {
        const { emailId, password } = req.body;

        const user: any = await findByEmail(emailId)
        if (!user) return res.status(400).json({ message: "Invalid email" });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: "Invalid password" });

        const accessToken = generateAccessToken(user._id, user.role);
        const refreshToken = generateRefreshToken(user._id, user.role);

        saveRefreshToken(user.id, refreshToken);

        return res.status(200).json({
            message: "Login successful",
            accessToken,
            refreshToken,
            userId: user.id
        });
    } catch (error) {
        return res.status(500).json({ message: "Error logging in", error });
    }
};

const getAccessToken = async (req: Request, res: Response): Promise<Response> => {
    try {
        const token  = req.params.refreshToken;
        if (!token) return res.status(401).json({ message: "Refresh token required" });

        const isExisting = await getRefreshToken(token)
        if (!isExisting) {
            return res.status(403).json({ message: "Invalid refresh token" });
        }

        const user = verifyRefreshToken(token);
        const newAccessToken = generateAccessToken(user.userId, user.role);

        return res.status(200).json({ accessToken: newAccessToken });
    } catch (error) {
        return res.status(403).json({ message: "Invalid or expired refresh token" });
    }
};

export {
    login,
    getAccessToken,
}