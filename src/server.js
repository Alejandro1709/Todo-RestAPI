import express from "express";
import { ENV, PORT } from "./config/secrets.js";

const app = express();

app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello" });
});

app.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT} in ${ENV} mode`);
});
