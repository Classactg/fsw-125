const express = require("express")
const app = express()


    //1. Endpoint (mount path)
    //2. CallBack function
    //3. Fake Data
    const users = [
        { name: "joe", age: 20},
        { name: "joe", age: 20},
        { name: "betty", age: 20},
        { name: "sarah", age: 20},
        { name: "mike", age: 20}
    ]
        
app.get("/users", (req, res) => {
    console.log(users)
    res.send(users)
})

const actors = [
    { name: "King Kong", age: 168},
    { name: "Link", age: 31},
    { name: "Mario", age: 32},
    { name: "Samus", age: 28},
    { name: "Captain Commando", age:30}
]
    
app.get("/actors", (req, res) => {
console.log(actors)
res.send(actors)
})

const planets = [
    { name: "Earth", color: "blue"},
    { name: "Mars", color: "red"},
    { name: "Venus", color: "brown"},
    { name: "Saturn", color: "grey"},
    { name: "Mercury", age: "black"}
]
    
app.get("/planets", (req, res) => {
console.log(planets)
res.send(planets)
})
// app.put()
// app.post()
// app.delete()
        // 1: PORT   2:  CB
app.listen(9000, () => {
    console.log("The server is running on Port 9000")
})