import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import usersRoutes from "./routes/users.routes";
// import cors from "cors";
dotenv.config();

const app = express();
// app.use(cors());
app.use(express.json());

app.get("/", (_req, res) => {
  res.send("Mobile LMS API is running");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
