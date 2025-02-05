import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const ACCESS_SECRET = process.env.ACCESS_TOKEN_SECRET || "access_secret_key";
const REFRESH_SECRET = process.env.REFRESH_TOKEN_SECRET || "refresh_secret_key";

export const generateAccessToken = (userId: string, role: string): string => {
    return jwt.sign({ userId, role }, ACCESS_SECRET, { expiresIn: "15m" });
};

export const generateRefreshToken = (userId: string, role: string): string => {
    return jwt.sign({ userId, role }, REFRESH_SECRET, { expiresIn: "7d" });
};

export const verifyAccessToken = (token: string): any => {
    return jwt.verify(token, ACCESS_SECRET);
};

export const verifyRefreshToken = (token: string): any => {
    return jwt.verify(token, REFRESH_SECRET);
};
