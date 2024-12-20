import Todo from "../models/Todo.js";

const todos = [];

export const getTodos = (req, res) => {
  res.status(200).json({
    data: todos,
    total: todos.length,
  });
};

export const getTodo = (req, res) => {
  const { id } = req.params;

  const foundTodo = todos.find((t) => t.id === +id);

  res.status(200).json(foundTodo);
};

export const createTodo = (req, res) => {
  const { title, description } = req.body;

  const newTodo = new Todo(title, description);

  todos.push(newTodo);

  res.status(201).json(newTodo);
};

export const updateTodo = (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;

  const foundTodoIdx = todos.findIndex((p) => p.id === +id);
  const foundTodo = todos[foundTodoIdx];

  foundTodo.title = title || foundTodo.title;
  foundTodo.description = description || foundTodo.description;

  res.status(200).json(foundTodo);
};

export const deleteTodo = (req, res) => {
  const { id } = req.params;

  const todoIdx = todos.findIndex((t) => t.id == +id);

  todos.splice(todoIdx, 1);

  res.status(204).json({ message: "Removed" });
};
