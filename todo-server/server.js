const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

let tasks = [];

app.get('/tasks', (req, res) => res.json(tasks));

app.post('/tasks', (req, res) => {
    tasks.push(req.body.task);
    res.json({ message: 'Task added' });
});

app.delete('/tasks/:index', (req, res) => {
    const i = req.params.index;
    tasks.splice(i, 1);
    res.json({ message: 'Task deleted' });
});

app.listen(3000, () => console.log('Server running on port 3000'));
