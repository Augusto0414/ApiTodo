import { Request, Response } from "express";
import { TodoService } from "../../../application/service/TodoService";

export class TodoController {
  private todoService: TodoService;

  constructor() {
    this.todoService = new TodoService();
  }

  async create(req: Request, res: Response) {
    const { title, description } = req.body;
    const todo = await this.todoService.createTodo(title, description);
    res.status(201).json(todo);
  }

  async getAll(req: Request, res: Response) {
    const todos = await this.todoService.getAllTodos();
    res.json(todos);
  }

  async getById(req: Request, res: Response) {
    const id = req.params.id;
    const todo = await this.todoService.getTodoById(id);
    if (todo) {
      res.json(todo);
    } else {
      res.status(404).send("Todo not found");
    }
  }

  async update(req: Request, res: Response) {
    const id = req.params.id;
    const todo = await this.todoService.getTodoById(id);

    if (todo) {
      const { title, description, status } = req.body;
      todo.title = title || todo.title;
      todo.description = description || todo.description;
      todo.status = status || todo.status;
      const updatedTodo = await this.todoService.updateTodo(todo);
      res.json(updatedTodo);
    } else {
      res.status(404).send("Todo not found");
    }
  }

  async delete(req: Request, res: Response) {
    const id = req.params.id;
    await this.todoService.deleteTodo(id);
    res.status(204).send();
  }
}
