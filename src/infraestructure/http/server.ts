import express from "express";
import todoRouter from "./routes/todoRoutes";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/todos", todoRouter);
export default app;
