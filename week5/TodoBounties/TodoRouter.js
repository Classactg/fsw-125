const express = require('express')
const todoRouter = express.Router()
const { v4 } = require("uuid")
const todos = [{
    description: "Secure Web",
    completed: "false",
    todoAmount: "5000",
    type: "Cyber Security",
    _id: v4()
},
{
    description: "Work Out",
    completed: "false",
    todoAmount: "5000",
    type: "Buy Weights",
    _id: v4()
},
{
    description: "Drink Water",
    completed: "true",
    todoAmount: "5000",
    type: "Get Filters",
    _id: v4()
},
{
    description: "Cook Food",
    completed: "false",
    todoAmount: "5000",
    type: "Look Up Recipies",
    _id: v4()
},
{
    description: "Ride Bike",
    completed: "false",
    todoAmount: "5000",
    type: "Fix First",
    _id: v4()
},
{
    description: "Go Out",
    completed: "false",
    todoAmount: "500",
    type: "Dance",
    _id: v4()
},
{
    description: "Brush Teeth",
    completed: "true",
    todoAmount: "300",
    type: "Charge Brush",
    _id: v4()
},
{
    description: "Drive",
    completed: "true",
    todoAmount: "1500",
    type: "Get Gas",
    _id: v4()
},
{
    description: "Buy Food",
    completed: "false",
    todoAmount: "3500",
    type: "Grocery Shop",
    _id: v4()
},
{
    description: "Study",
    completed: "false",
    todoAmount: "750",
    type: "Prepare",
    _id: v4()
}
]
// Get All 
todoRouter.get("/", (req, res) => {
    res.send(todos)
})
// Get One 
todoRouter.get("/:todoId", (req, res) => {
    const todoId = req.params.todoId
    const foundtodo = todos.find(todo => todo._id === todoId)
    res.send(foundtodo)
})
// Get by todo Object
todoRouter.get("/search/completed", (req, res) => {
    const completed = req.query.completed
    const filteredtodos = todos.filter(todo => todo.completed === completed)
})
// Post One
todoRouter.post("/", (req, res) => {
    const newtodo = req.body
    newtodo._id = v4()
    todos.push(newtodo)
    res.send(newtodo)
})
// Update One
todoRouter.put("/:todoId", (req, res) => {
    const todoId = req.params.todoId
    const todoIndex = todos.findIndex(todo => todo._id === todoId)
    res.send(updatetodo)
})
// Delete One
todoRouter.delete("/:todoId", (req, res) => {
    const todoId = req.params.todoId
    const todoIndex = todos.findIndex(todo => todo._id === todoId)
    todos.splice(todoIndex, 1)
    res.send("Successfully deleted todo!")
})
module.exports = todoRouter