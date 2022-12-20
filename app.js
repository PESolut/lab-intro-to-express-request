// DEPENDACIES
const express = require("express")
const morgan = require("morgan")
const pokemon = require("./models/pokemon.json");
// console.log(pokemon[0]);

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
    res.send("Congratulations on starting a new project called run-runny-runner!")
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
})
app.get("/pokemon", (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.write(
        res.json(pokemon)
    )
res.end()
})
app.get('/pokemon/:indexOfArray', (req,res) => {
    const { indexOfArray } = req.params
    const foundDC = pokemon.find(element => element.name.toLowerCase() === indexOfArray.toLowerCase())
    
    res.setHeader('Content-Type', 'text/html')

    if (+indexOfArray){
        res.write (
            res.json(pokemon.at(+indexOfArray))
        )
    } else if (foundDC){
        res.write (
            res.json(foundDC)
        )
    } else { 
        res.write(
            res.json([])
        )
    } 
})

app.get ('/pokemon/:searchQuery', (req,res) => {
    const { searchQuery } = req.params
    res.setHeader('Content-Type', 'text/html')
    // // DC stands for defautl case
    // const foundDC = pokemon.find(element => element.name === searchQuery)
    
    // if(foundDC){
    //     res.write
    //         res.json('s')
    //         res.end()
    // }
    res.send('hi')
})
// console.log(express)

// EXPORT
module.exports = app;