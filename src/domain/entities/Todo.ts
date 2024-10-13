import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

export enum TodoStatus {
  POR_HACER = "Por hacer",
  EN_PROCESO = "En proceso",
  COMPLETADAS = "Completadas",
  BLOQUEADAS = "Bloqueadas",
}

@Entity({ name: "Tasks" })
export class Todo {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "varchar", length: 100 })
  title: string;

  @Column({ type: "varchar" })
  description: string;

  @Column({
    type: "enum",
    enum: TodoStatus,
    default: TodoStatus.POR_HACER,
  })
  status!: TodoStatus;
}
