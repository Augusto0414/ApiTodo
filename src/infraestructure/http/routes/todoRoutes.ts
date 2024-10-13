import { Router } from "express";
import { TodoController } from "../controller/todoController";

const router = Router();
const todoController = new TodoController();

router.post("/todos", todoController.create.bind(todoController));
router.get("/todos", todoController.getAll.bind(todoController));
router.get("/todos/:id", todoController.getById.bind(todoController));
router.put("/todos/:id", todoController.update.bind(todoController));
router.delete("/todos/:id", todoController.delete.bind(todoController));

export default router;
