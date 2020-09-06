const express = require("express")
const app = express()

app.use(express.json())
app.use("/fruits", require("./Routes/fruitsRouter"))

  

app.listen(9000, () => {
    console.log("Server is listening on port:9000");
});