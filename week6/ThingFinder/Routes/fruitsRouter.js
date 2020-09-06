const express = require('express')
const fruitsRouter = express.Router()
const { v4: uuidv4 } = require('uuid');
const fruits = [{

    name: "Guava",
    isSweet: "true",
    price: "200",
    type: "fruit",
    _id: uuidv4()
},
{
    name: "apple",
    isSweet: "true",
    price: "800",
    type: "fruit",
    _id: uuidv4()
},
{
    name: "Watermelon",
    isSweet: "true",
    price: "1000",
    type: "fruit",
    _id: uuidv4()
},
{
    name: "Banana",
    isSweet: "true",
    price: "300",
    type: "fruit",
    _id: uuidv4()
},
{
    name: "Pomegranate",
    isSweet: "true",
    price: "700",
    type: "fruit",
    _id: uuidv4()
},
{
    name: "Grapes",
    isSweet: "true",
    price: "500",
    type: "fruit",
    _id: uuidv4()
},
{
    name: "Plums",
    isSweet: "true",
    price: "300",
    type: "fruit",
    _id: uuidv4()
},
{
    name: "Orange",
    isSweet: "true",
    price: "600",
    type: "fruit",
    _id: uuidv4()
},
{
    name: "Melon",
    isSweet: "true",
    price: "900",
    type: "fruit",
    _id: uuidv4()
},
{
    name: "Peach",
    isSweet: "true",
    price: "400",
    type: "fruit",
    _id: uuidv4()
}
]
// Get All 
fruitsRouter.get("/", (req, res) => {
    res.send(fruits)
})
// Get One 
fruitsRouter.get("/:fruitId", (req, res) => {
    const fruitId = req.params.fruitId
    const foundfruit = fruits.find(fruit => fruit._id === fruitId)
    res.send(foundfruit)
})
// Get by fruit Object
fruitsRouter.get("/search/name", (req, res) => {
    const name = req.query.name
    const filteredfruits = fruits.filter(fruit => fruit.name === name)
    res.send(filteredfruits)
})
module.exports = fruitsRouter