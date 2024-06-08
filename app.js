const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

let tasks = [];

// Home route
app.get('/', (req, res) => {
  res.render('index', { tasks: tasks });
});

// Add a new task
app.post('/addtask', (req, res) => {
  let newTask = req.body.newtask;
  tasks.push(newTask);
  res.redirect('/');
});

// Remove a task
app.post('/removetask', (req, res) => {
  let completedTask = req.body.check;
  if (typeof completedTask === 'string') {
    tasks = tasks.filter(task => task !== completedTask);
  } else if (typeof completedTask === 'object') {
    completedTask.forEach(task => {
      tasks = tasks.filter(t => t !== task);
    });
  }
  res.redirect('/');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
