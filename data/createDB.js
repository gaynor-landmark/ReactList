
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

var dropLists = 'DROP TABLE IF EXISTS lists;'


var createLists = [
  'CREATE TABLE lists (',
	'ListID VARCHAR(255) PRIMARY KEY ASC,',
	'ListName VARCHAR(255)',

	');'
].join(' ')

knex.raw(dropLists)
  .then(function (resp) {
  return knex.raw(createLists)
  })
  .then(function (resp) {
	  process.exit()
	})
