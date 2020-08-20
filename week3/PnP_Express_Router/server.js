const express = require("express")
const app = express()
const cors = require("cors")
app.use(express.json())
app.use(cors())
app.use("/bounties", require("./Route/BountyRouter"))
app.listen(9000, () => {
    console.log("Server is listening on port:9000");
});