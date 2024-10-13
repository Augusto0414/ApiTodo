import { Router } from "express";
import { TodoController } from "../controller/todoController";

const router = Router();
const todoController = new TodoController();

router.post("/", todoController.create.bind(todoController)); // Cambié aquí
router.get("/", todoController.getAll.bind(todoController));
router.get("/:id", todoController.getById.bind(todoController));
router.put("/:id", todoController.update.bind(todoController));
router.delete("/:id", todoController.delete.bind(todoController));

export default router;
