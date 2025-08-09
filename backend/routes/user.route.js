import express from "express";
import {
  delteUser,
  getAllUser,
  register,
  updateUser,
} from "../controller/user.controller.js";
const router = express.Router();

router
  .post("/register", register)
  .get("/list", getAllUser)
  .put("/update/:id", updateUser)
  .delete("/delete/:id", delteUser);

export default router;
