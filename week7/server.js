const Express = require ("express")
const app = Express ()
// const cors = require("cors")
app.use(Express.json())
// app.use(cors())
app.use("/music", require("./serverRouter.js"))
app.listen (9000, () => {
    console.log("The Server Is Running On Port 9000")
})