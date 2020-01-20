# express-pathdata
98.10.30  path data through - tinyProjects

[this is final video](...)

![](https://archive.org/details/img20200121020039)

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
data.speakers.forEach(function(item){ if(item.shortname == req.params.speakerid){ pageSpeakers.push(item) pagePhotos = pagePhotos.concat(item.artwork) } })
...
...
var data = req.app.get('appData')
...
data.speakers.forEach(function(item){ pagePhotos = pagePhotos.concat(item.artwork) })
```