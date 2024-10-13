import { AppDataSource } from "../../config/ormconfig";

export const initDatabase = async () => {
  await AppDataSource.initialize();
  console.log("Database connected");
};
