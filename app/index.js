var express = require('express')
var router = express.Router()

router.get('/',function(req,res){
  var data = req.app.get('appData')

  res.render('index1',{
    data1: data.Dadashi[0].summary
  })
})

module.exports = router
