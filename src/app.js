const express = require("express")
const app = express()
const hbs = require('hbs')
const path = require('path')
const validator = require("validator")


const port = process.env.PORT || 3000

const directory = path.join(__dirname, '../utils')
const directoryHbs = path.join(__dirname, '../template/views')
const partialsDir = path.join(__dirname, '../template/partials')

app.use(express.static(directory))
// // app.use(express.static("./"))

app.set('view engine', 'hbs')
app.set('views', directoryHbs)
hbs.registerPartials(partialsDir)

app.get('', (req,res) => {
    res.render('index.html')
})


app.listen(port, () => {
    console.log('listening on port ' + port + '...')
})
