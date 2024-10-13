import { TodoRepository } from "../../domain/repositories/TodoRepository";
import { Todo } from "../../domain/entities/Todo";

export class TodoService {
  private todoRepository: TodoRepository;

  constructor() {
    this.todoRepository = new TodoRepository();
  }

  async createTodo(title: string, description: string): Promise<Todo> {
    const todo = new Todo();
    todo.title = title;
    todo.description = description;
    return await this.todoRepository.create(todo);
  }

  async getAllTodos(): Promise<Todo[]> {
    return await this.todoRepository.findAll();
  }

  async getTodoById(id: string): Promise<Todo | null> {
    return await this.todoRepository.findById(id);
  }

  async updateTodo(todo: Todo): Promise<Todo> {
    return await this.todoRepository.update(todo);
  }

  async deleteTodo(id: string): Promise<void> {
    await this.todoRepository.delete(id);
  }
}
