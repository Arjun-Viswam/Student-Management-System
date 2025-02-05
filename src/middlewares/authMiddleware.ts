import { Response, NextFunction } from "express";
import { verifyAccessToken } from "../utils/jwt";
import { AuthRequest } from "../utils/express";

export const authenticateUser = async (req: AuthRequest, res: Response, next: NextFunction): Promise<any> => {
    try {
        const token = req.header("Authorization")?.split(" ")[1];
        if (!token) return res.status(401).json({ message: "Access denied. No token provided." });

        const user = verifyAccessToken(token);
        req.user = { userId: user.userId, role: user.role };

        next();
    } catch (error) {
        return res.status(401).json({ message: "Invalid or expired token." });
    }
};