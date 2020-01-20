# express-pathdata
98.11.01  path data through - tinyProjects

[this is final video](https://archive.org/details/express-pathdata)

![](https://ia801402.us.archive.org/18/items/img20200121020039/IMG_20200121_020039.jpg)

## app.js
```
var dataFile = require('./data/data.json')
...
app.set('appData' , dataFile)
```
## speakers.js
```
var data = req.app.get('appData')
...
data.speakers.forEach(function(item){
  if(item.shortname == req.params.speakerid){
    pageSpeakers.push(item)
    pagePhotos = pagePhotos.concat(item.artwork)
    }
  })
...
...
var data = req.app.get('appData')
...
data.speakers.forEach(function(item){
  pagePhotos = pagePhotos.concat(item.artwork)
  })
```
