var express = require('express')
var app = express()

var data = [
  "/img/011.jpg",
  "/img/012.jpg",
  "/img/013.jpg"
]

app.set('view engine','ejs')
app.set('views','app')

app.use(express.static('app'))

app.get('/',function(req,res){
  res.render('index',{
    photo: data
  })
})

var server = app.listen(3000)
