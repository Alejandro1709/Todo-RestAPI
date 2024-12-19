import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(2025, () => {
  console.log("Server is up and running on port 2025");
});
