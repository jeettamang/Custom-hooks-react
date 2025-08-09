import UserModel from "../model/user.model.js";
import { sendVerificationEmail } from "../services/sendMail.js";
import bcrypt from "bcryptjs";

const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password)
      throw new Error("All fields are required");
    const existUser = await UserModel.findOne({ email });
    if (existUser) throw new Error("User already exist");
    const hashedPassword = bcrypt.hashSync(password, 10);
    const newUser = await UserModel.create({
      name,
      email,
      password: hashedPassword,
    });
    sendVerificationEmail(email);
    res.json({
      message: "User registered successfully. Verification email sent.",
      newUser,
    });
  } catch (error) {
    console.error("User registration error:", error);
    res.status(500).json({ message: error.message || "Registration failed" });
  }
};

const getAllUser = async (req, res) => {
  try {
    const { id } = req.params;
    const allUsers = await UserModel.find(id);
    res.status(200).json({
      message: "All users list",
      allUsers,
    });
  } catch (error) {
    res.status(500).json({
      message: "Users not available",
      error: error.message,
    });
  }
};

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, password, phone } = req.body;
    if (password) {
      if (typeof password !== "string") {
        throw new Error("Password must be a string");
      }
    }
    const userData = { name, email, password };
    const hashedPassword = bcrypt.hashSync(password, 10);
    userData.password = hashedPassword;
    const updatedUser = await UserModel.findByIdAndUpdate(id, userData, {
      new: true,
    });
    if (!updatedUser) {
      throw new Error("User not found");
    }
    res.status(200).json({
      message: "User data is updated",
      updatedUser,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to update the user data",
      error: error.message,
    });
  }
};
const delteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const deltedUser = await UserModel.findByIdAndDelete(id);
    if (!deltedUser) {
      throw new Error("User not found");
    }
    res.status(200).json({
      message: "User deleted successfully",
      deletedUserDetail: deltedUser,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to delete the user", error: error.message });
  }
};
export { register, getAllUser, updateUser, delteUser };
