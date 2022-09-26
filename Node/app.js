const mongoose = require("mongoose")
const express = require("express")
const cors = require("cors")
const session = require("express-session")
const app = express()
const mainRouter = require("./routers/mainRouter")
require("dotenv").config()

mongoose.connect(process.env.MONGO_KEY)
.then(res => {
    console.log('mongoose conected')
}).catch(e => {
    console.log('ERROR')
})

app.listen(4000)
app.use(express.json())

app.use(cors({
    origin: true,
    credentials: true,
    methods: "GET, POST"
}))

app.use(session({
    secret: "6s5d4fs8lklklk9d4f65",
    resave: false,
    saveUninitialized: true
}))




app.use("/", mainRouter)