import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import usersRoute from "./routes/users.js";
import quesRoute from "./routes/ques.js";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();
dotenv.config();

//middlewares
app.use(cors())
app.use(cookieParser())
app.use(express.json());
app.use("/auth", authRoute);
app.use("/users", usersRoute);
app.use("/ques", quesRoute);

// error handling middleware
app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

// Connections

const PORT = process.env.PORT || 6001;
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));
  })
  .catch((error) => console.log(`${error} did not connect`));
