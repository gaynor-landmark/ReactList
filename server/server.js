var express = require('express')
var path = require('path')

const app = express()

app.use(express.static(path.join(__dirname, '../public')))

if (require.main === module){
  app.set('port', 4000)
  const server = app.listen(app.get('port'), () => {
    console.log('Listening on port ' + server.address().port)
  })
}
app.get('/', function(req, resp) {
  resp.send('react-list')
})
