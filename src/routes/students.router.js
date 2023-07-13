import { Router } from "express";
import {
  getStudents,
  createStudent,
} from "../controllers/students.controller.js";
import { addLogger } from "../config/logger.js";

const router = Router();

router.get("/", addLogger, getStudents);

router.post("/", addLogger, createStudent);

export default router;
