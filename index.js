const express = require('express');
const app = express();
app.use(express.json());
let todos = [];
app.get('/', (req, res) => res.send('To-Do App Live!'));
app.get('/todos', (req, res) => res.json(todos));
app.post('/todos', (req, res) => {
  todos.push(req.body.todo);
  res.json({ message: 'Todo added' });
});
app.listen(3000, () => console.log('Server on port 3000'));
console.log("hello")