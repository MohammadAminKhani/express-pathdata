var express = require('express')
var app = express()
var dataFile = require('./data.json')

app.set('appData',dataFile)

app.set('view engine','ejs')
app.set('views','app')

app.use(require('./index'))

var server = app.listen(3000)
