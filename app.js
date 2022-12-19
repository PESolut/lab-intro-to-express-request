// DEPENDACIES
const express = require("express")
const morgan = require("morgan")

// CONFIGURATION
const app = express()

// MIDDLEWARE TO SEE HTTP REQUESTS
app.use(morgan("tiny"))



// ROUTES

// example
app.get("/", (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.write("Welcome 99 Pokemon")
    // res.write("<p><a href='/bugs'>Start</a></p>")
    res.end()
})

// test 1
app.get("/:verb/:adjective/:noun", (req, res) => {
    res.send("Congratulations on starting a new project called jumping-joyous-jellybean!")
})

// test 2
app.get("/bugs", (req, res) => {
    // res.write('<h1>99 little bugs in the code</h1>')
    // res.write('<h1>99</h1>')
    // res.write(JSON.stringify({
    //     bugsTest2
    // }))
    const remainingBugs = Math.floor(Math.random() * 500) + 1;

    res.setHeader('Content-Type', 'text/html');
    res.write('<h1>99 little bugs in the code</h1>')
    res.write(`<p><a href="/bugs/${remainingBugs}">pull one down, patch it around</a></p>`)
    res.end()
    return
})
// test 3

app.get("/bugs/:numberOfBugs", (req, res) => {
    // console.log('req.params', req.params)
    const { numberOfBugs } = req.params
    console.log(numberOfBugs)
    if ( numberOfBugs < 200 ) {
        res.setHeader('Content-Type', 'text/html');
        res.write(`${numberOfBugs} little bugs in the code`)
        res.write(`<p><a href="/bugs/${+numberOfBugs+2}">pull one down, patch it around</a></p>`)
        res.write(`<a href="/bugs">Home</a>`)
        res.end()
        return
        }
    else if (numberOfBugs => 200){
        res.setHeader('Content-Type', 'text/html');
        res.write('Too many bugs!! Start over!')
        res.write(`<p>Click <a href="/">HERE</a> to return to home directory. </p>`)
        res.end()
        return
    } 
    // else if(  ){
        
    // }

})

// console.log(express)

// EXPORT
module.exports = app;