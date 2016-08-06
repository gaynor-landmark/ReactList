var express = require('express')
var cors = require('cors')

var uuid = require('uuid')
//var $ = require('jquery')
var bodyParser = require('body-parser')
var urlencodedParser = bodyParser.urlencoded({ extended: false })

var knex = require('knex')({
  client: 'sqlite3',
  connection: {
    filename: './data/theLists.sqlite'
  },
  useNullAsDefault: true
})

module.exports = function routes(app){

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


  app.post('/addList', urlencodedParser, function(req, resp){
    var newID = uuid.v4()
  //  console.log('server-side', resp)
    knex('Lists')
    .insert({
      ListID : newID,
      ListName: req.body.listName
    })
    resp.end(newID)

  })

  app.post('/addItem', urlencodedParser, function(req, resp){
    var newID = uuid.v4()
    console.log('server-side additem')
    knex('Items')
    .insert({
      ItemID : newID,
      ItemListID : req.body.ItemListId,
      ItemText : req.body.ItemText,
      ItemStatus : req.body.ItemStatus
    })
    resp.end(newID)
  })


}
