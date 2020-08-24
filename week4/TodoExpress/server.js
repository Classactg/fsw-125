// const express = require("express")
// const app = express()
// const cors = require("cors")
// ​app.use(express.json())
// app.use(cors())
// app.use("/bounties", require("./routes/bountyRouter.js"))
// ​app.listen(9000, () => {
//     console.log("Server is listening on port: 9000");
// });
const express = require("express")
const app = express()
const cors = require("cors")
app.use(express.json())
app.use(cors())
app.use("/todo", require("./TodoRouter"))
app.listen(9000, () => {
    console.log("Server is listening on port:9000");
});