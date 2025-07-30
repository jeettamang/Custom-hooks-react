import express from "express";
import { upload } from "../utils/multer.js";
import secureAPI from "../utils/secure.js";
const router = express.Router();

router.post(
  "/",
  secureAPI(["user", "admin"]),
  upload.single("profilePic"),
  (req, res, next) => {
    try {
      const { body, file } = req;
      const fileUrl =
        process.env.FILE_URL + "/resources" + `/users/${file.filename}`;
      res.json({ data: fileUrl, msg: "File uploaded successfully" });
      console.log(body, file);
    } catch (error) {
      next(error);
    }
  }
);
export default router;
