const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');
const mongoose = require("mongoose");

const Todo = require("./models/todo");

const port = 3000;

require("dotenv").config();
const app = express();

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors());

// ConectMongo
const dburl = "mongodb://localhost:27017/tododb";
mongoose.connect(process.env.MONGO_DB_URI);
// mongoose.connect(dburl, { useNewUrlParser: true, useUnifiedTopology: true})

app.get("/", (req, res) => {
  Todo.find().then((result) => {
    res.json({ data: result });
    console.log(result);
  });
});

////

app.get("/:id", (req, res) => {
  const todoId = req.params.id;
  Todo.findById(todoId)
    .then((todo) => {
      if (!todo) {
        res.sendStatus(404);
        return;
      }

      res.json({ todo });
    })
    .catch((error) => {
      console.error(error);
      res.sendStatus(500);
    });
});

////
app.post("/", (req, res) => {
  const todo = new Todo({
    todo: req.body.todoValue,
  });
  todo.save().then((result) => {
    res.json({ result: 'OK' });
  });
});

///

app.patch("/:id", (req, res) => {
  const todoId = req.params.id;
  const todoValue = req.body.todoValue;

  Todo.updateOne({ _id: todoId }, { todo: todoValue })
    .then(() => {
      res.json({ result: 'OK' });
    })
    .catch((error) => {
      // Manejo de errores
      console.error(error);
      res.sendStatus(500);
    });
});

///

app.delete("/:id", (req, res) => {
  Todo.findByIdAndDelete(req.params.id).then((result) => {
    res.json({ result: 'OK' });
  });
});

app.listen(port, () => {
  console.log("Port: " + port);
});
