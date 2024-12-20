import express from "express";
import todoRoutes from "./routes/todoRoutes.js";
import { ENV, PORT } from "./config/secrets.js";
import morgan from "morgan";

const app = express();

app.use(express.json());

if (ENV === "development") {
  app.use(morgan("dev"));
}

app.use("/api/v1/todos", todoRoutes);

app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello" });
});

app.listen(PORT, () => {
  console.log(`🚀 Server is up and running on port ${PORT} in ${ENV} mode`);
});
