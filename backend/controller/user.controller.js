import UserModel from "../model/user.model.js";
import { sendVerificationEmail } from "../services/sendMail.js";

const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password)
      throw new Error("All fields are required");
    const existUser = await UserModel.findOne({ email });
    if (existUser) throw new Error("User already exist");
    const newUser = await UserModel.create({
      name,
      email,
      password,
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
export { register };
