import { Repository } from "typeorm";
import { AppDataSource } from "../../config/ormconfig";
import { Todo } from "../../domain/entities/Todo";

export class TodoRepository {
  private repository: Repository<Todo>;

  constructor() {
    this.repository = AppDataSource.getRepository(Todo);
  }

  async create(todo: Todo): Promise<Todo> {
    return await this.repository.save(todo);
  }

  async findAll(): Promise<Todo[]> {
    return await this.repository.find();
  }

  async findById(id: string): Promise<Todo | null> {
    return await this.repository.findOneBy({ id });
  }

  async update(todo: Todo): Promise<Todo> {
    return await this.repository.save(todo);
  }

  async delete(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}
