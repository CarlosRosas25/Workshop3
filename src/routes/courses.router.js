import { Router } from "express";
import { getCourses, saveCourse } from "../controllers/courses.controller.js";
import { addLogger } from "../config/logger.js";

const router = Router();

router.get("/", addLogger, getCourses);

router.post("/", addLogger, saveCourse);

export default router;
