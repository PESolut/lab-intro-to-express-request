// DEPENDACIES
const express = require("express")
const morgan = require("morgan")

// CONFIGURATION
const app = express()

// MIDDLEWARE TO SEE HTTP REQUESTS
app.use(morgan("tiny"))

// ROUTES
app.get("/", (req, res) => {
    res.send("Welcome 99 Pokemon")
})

console.log(express)

// EXPORT
module.exports = app;