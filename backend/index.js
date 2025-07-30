import express from "express";
import dotenv from "dotenv";
import fileRoutes from "./routes/file.route.js";
import { dbConnection } from "./config/database.js";

dotenv.config();
const app = express();

const PORT = process.env.PORT || 3000;
//routes
app.use("/api/files", fileRoutes);

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
