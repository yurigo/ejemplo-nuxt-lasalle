const data = [
  { id: 1, text: "npm init", done: true },
  { id: 2, text: "npm i express", done: true },
  { id: 3, text: "npm i -D nodemon", done: true },
  { id: 4, text: "npm i cors", done: false },
  { id: 5, text: "npm i uuid", done: false },
];

export default function handler(req, res) {
  res.status(200).json(data);
}

// app.get("/todos", (req, res) => {
//   console.log("get all");
//   res.json(data);
// });

// app.get("/todos/:id", (req, res) => {
//   const { id } = req.params;
//   console.log("get one", id);
//   const todo = data.find((todo) => todo.id === id);
//   res.json(todo);
// });

// app.post("/todos", (req, res) => {
//   console.log("post");
//   const { text } = req.body;
//   const newTodo = {
//     id: uuid(),
//     text,
//     done: false,
//   };
//   data.push(newTodo);
//   res.json(newTodo);
// });

// app.patch("/todos/:id", (req, res) => {
//   console.log("patch");
//   const { id } = req.params;
//   const { done } = req.body;
//   const todo = data.find((todo) => todo.id === id);
//   todo.done = done;
//   res.json(todo);
// });

// app.put("/todos/:id", (req, res) => {
//   console.log("put");
//   const { id } = req.params;
//   const { done } = req.body;
//   const todo = data.find((todo) => todo.id === id);
//   todo.done = done;
//   res.json(todo);
// });

// app.delete("/todos/:id", (req, res) => {
//   console.log("delete");
//   const { id } = req.params;
//   const todo = data.find((todo) => todo.id === id);
//   data.splice(data.indexOf(todo), 1);
//   res.json(todo);
// });
