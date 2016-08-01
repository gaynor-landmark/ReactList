var express = require('express')
// var path = require('path')
var cors = require('cors')

var uuid = require('uuid')
//var $ = require('jquery')
var bodyParser = require('body-parser')
//var display = require('../src/js/display.js')

//var user = {}


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

  app.post('/addItem', function(req, resp){
    console.log('in server addItem', knex)
    var newID = uuid.v4()

    knex('lists')
    .insert({
      listID : newID,
      listName: req.body
    })
    .then(function(resp){
      console.log(resp)
    //  resp.send(newID)
    })
  })


  // app.post('/palettes', function(req, res) {
  // var newId = uuid.v4()
  // console.log(user.id)
  // var userID = 0
  // if (passport.session.id){
  //   var userID = passport.session.id
  // }
  // var colours = req.body.Colours.split('|')
  //   knex('palettes').insert({
  //         PaletteID: newId ,
  //         PaletteName: req.body.Name,
  //         UserID: userID,
  //         Colour1: colours[0],
  //         Colour2: colours[1],
  //         Colour3: colours[2],
  //         Colour4: colours[3],
  //         Colour5: colours[4]
  //       }).then(function(resp) {
  //         res.send('Saved')
  //       })
  // })
  //
  // app.get('/palettes', function(req, res) {
  //   console.log("in GET", passport.session.id)
  //   if (passport.session.id) {
  //     knex('palettes')
  //     .join('users', 'users.UserID', '=', 'palettes.UserID')
  //     //  .select('users.DisplayName', 'palettes.PaletteName', 'palettes.Colour1', 'palettes.Colour2', 'palettes.Colour3', 'palettes.Colour4', 'palettes.Colour5')
  //
  //     .where('palettes.UserID', passport.session.id)
  //     .select('*')
  //     .then(function(resp) {
  //       console.log ("inget", resp)
  //         res.send(resp)
  //     })
  //   } else {
  //     res.send({})
  //   }
  //
  // })





}
