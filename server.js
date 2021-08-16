require('dotenv').config()
const express = require('express')
const path = require('path')
const static = require('serve-static')
const app = express()

// setting html, script, public 
app.use('/', static(path.join(__dirname, 'html')))
app.use('/script', express.static(__dirname + '/script'))
app.use(express.static('public'))

const PORT = process.env.PORT || 7000

app.listen(PORT, console.log("connected server..."))