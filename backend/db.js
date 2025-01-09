const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://admin:5hfvOAsNWpJjflHq@cluster0.o6iae.mongodb.net/todos");

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})
//todo is name of table
const todo = mongoose.model("todos", todoSchema);

module.exports={
    todo
}