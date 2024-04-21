const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/mern-todo', {

})
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log(err));

const Todo = require('./models/Todo');

app.get('/todos', async (req, res) => {
    const todos = await Todo.find();
    res.json(todos);
})


app.post('/todo/new', (req, res) => {
    const todo = new Todo({
        text: req.body.text,
    })
    todo.save(); // save to db
    res.json(todo); // send back to client

})

app.delete('/todo/delete/:id', async (req, res) => {
    const result = await Todo.findByIdAndDelete(req.params.id);
    res.json(result);

})


app.put('/todo/complete/:id', async (req, res) => {
    const todo = await Todo.findById(req.params.id); // find by id
    todo.completed = !todo.completed; // changes 
    
    todo.save();
    res.json(todo);
})
app.listen(3001, () => {
    console.log('Server started on port 3001');

})

