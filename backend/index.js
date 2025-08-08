import express from "express";
import dotenv from "dotenv";
import fileRoutes from "./routes/file.route.js";
import { dbConnection } from "./config/database.js";
import userRoutes from "./routes/user.route.js";
dotenv.config();
const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3000;
//routes
app.use("/api/files", fileRoutes);
app.use("/api/users", userRoutes);

//application level error handling
app.use((err, req, res, next) => {
  console.error(err.stack);

  res.status(500).json({
    success: false,
    message: err.message || "Something went wrong",
  });
});

dbConnection();
app.listen(PORT, () => {
  console.log(`erver is running on port: ${PORT}`);
});
