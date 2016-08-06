var express = require('express')
var path = require('path')
var uuid = require('uuid')
var cors = require('cors')

var routes = require('./routes.js')

var bodyParser = require('body-parser')



const app = express()

app.use(express.static(path.join(__dirname, '../public')))

app.use(bodyParser.json())

routes(app)

if (require.main === module){
  app.set('port', 4000)
  const server = app.listen(app.get('port'), () => {
    console.log('Listening on port ' + server.address().port)
  })
}
