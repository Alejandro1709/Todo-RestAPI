import Todo from "../models/Todo.js";
import { pool } from "../config/db.js";
const todos = [];

export const getTodos = async (req, res) => {
  const { rows } = await pool.query("SELECT * FROM todos");

  res.status(200).json({
    data: rows,
    total: rows.length,
  });
};

export const getTodo = async (req, res) => {
  const { id } = req.params;

  const { rows } = await pool.query("SELECT * FROM todos WHERE id = $1", [id]);

  if (rows.length === 0) {
    return res.status(404).json({ message: "Todo not found" });
  }

  res.status(200).json(rows[0]);
};

export const createTodo = async (req, res) => {
  const { title, description } = req.body;

  const { rows } = await pool.query(
    "INSERT INTO todos (title, description) VALUES ($1, $2) RETURNING *",
    [title, description]
  );

  res.status(201).json(rows[0]);
};

export const updateTodo = async (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;

  const { rows } = await pool.query(
    "UPDATE todos SET title = $1, description = $2 WHERE id = $3 RETURNING *",
    [title, description, id]
  );

  res.status(200).json(rows[0]);
};

export const deleteTodo = async (req, res) => {
  const { id } = req.params;

  await pool.query("DELETE FROM todos WHERE id = $1", [id]);

  res.status(204).json({ message: "Removed" });
};
