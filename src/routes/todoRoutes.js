import { Router } from "express";
import { getTodos } from "../controllers/todosController.js";

const router = Router();

router.get("/", getTodos);

export default router;
