import User from "../models/userModel";
import RefreshToken from "../models/refreshTokenModel";

const findByEmail = async (emailId: string) => {
    return await User.findOne({ emailId })
};

const saveRefreshToken = async (userId: string, token: string) => {
    return await RefreshToken.create({ userId, token })
};

const getRefreshToken = async (token: string) => {
    return await RefreshToken.findOne({ token })
};

export {
    findByEmail,
    saveRefreshToken,
    getRefreshToken
}