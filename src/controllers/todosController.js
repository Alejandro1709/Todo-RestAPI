const todos = [
  {
    id: 1,
    title: "Buy groceries",
    description: "Buy milk, eggs, bread",
  },
  {
    id: 2,
    title: "Pay bills",
    description: "Pay electricity and water bills",
  },
];

export const getTodos = (req, res) => {
  res.status(200).json(todos);
};
