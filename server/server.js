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

var testList = [
  {
    itemText: "first list item",
    date: new Date("2016-07-01")
  },
  {
    itemText: "second list item",
    date: new Date("2016-07-03")
  },
  {
    itemText: "third list item",
    date: new Date("2016-07-02")
  }
]
app.get('/testList', function(req, resp) {
  console.log('in server get testList')
  resp.send(testList)
})
