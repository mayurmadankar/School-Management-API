import express from "express";
import { addSchool, listSchools } from "../controllers/schoolController.js";

const SchoolRouter = express.Router();

SchoolRouter.post("/addSchool", addSchool);
SchoolRouter.get("/listSchools", listSchools);

export default SchoolRouter;
