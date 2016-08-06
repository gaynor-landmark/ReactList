
var knex = require('knex')({
  client: 'sqlite3',
  connection: {
    filename: './data/theLists.sqlite'
  },
  useNullAsDefault: true,
  seeds: {
    directory: './seeds'
  },
  migrations: {
    tableName: 'migrations'
  }
})

var dropItems = 'DROP TABLE IF EXISTS Items;'


var createItems = [
  'CREATE TABLE Items (',
	'ItemID VARCHAR(255) PRIMARY KEY ASC,',
  'ItemListID VARCHAR(255),',
	'ItemText VARCHAR(500),',
  'ItemStatus INT',

	');'
].join(' ')

var dropLists = 'DROP TABLE IF EXISTS lists;'


var createLists = [
  'CREATE TABLE Lists (',
	'ListID VARCHAR(255) PRIMARY KEY ASC,',
	'ListName VARCHAR(255)',

	');'
].join(' ')

knex.raw(dropLists)
  .then(function (resp) {
    console.log('creating lists')
   return knex.raw(createLists)

  })
  .then (function(resp){
    return knex.raw(dropItems)
  })
  .then (function (resp) {
    return knex.raw(createItems)
  })
  .then(function (resp) {
	  process.exit()
	})
