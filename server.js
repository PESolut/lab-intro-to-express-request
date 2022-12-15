// DEPENDACIES
const app = require('./app.js')
require("dotenv").config()

// CONFIG
const PORT = process.env.PORT

//LISTENERS
app.listen(PORT, ()=> {
    console.log(`listening on port ${
        PORT }`)
})