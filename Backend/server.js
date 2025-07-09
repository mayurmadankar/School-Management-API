import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./src/config/db.js";
import SchoolRouter from "./src/routes/schoolRoutes.js";
dotenv.config();

const server = express();

server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(cors());

server.get("/", (req, res) => {
  res.send("Welcome to the Educase Backend API");
});

server.use("/api/schools", SchoolRouter);

const PORT = process.env.PORT || 3000;

server.listen(PORT, "0.0.0.0", () => {
  console.log(`Server is running on port ${process.env.PORT || 3000}`);
  connectDB();
});
export default server;
