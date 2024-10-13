import { DataSource } from "typeorm";
import dotenv from "dotenv";
import { Todo } from "../domain/entities/Todo";

dotenv.config();

export const AppDataSource: DataSource = new DataSource({
  type: "postgres",
  username: process.env.USER,
  host: process.env.HOST,
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
  port: parseInt(process.env.PORT_DATABASE as string, 10),
  entities: [Todo],
  synchronize: true,
  logging: true,
  ssl: true, // Habilitar SSL
  extra: {
    ssl: {
      rejectUnauthorized: false, // Aceptar certificados no verificados
    },
  },
});
