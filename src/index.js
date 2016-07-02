var React = require('react')
var render = require('react-dom').render
var App = require('./components/App')
var domready = require('domready')
console.log('ready')
  var testList = [
    {
      itemText: "first list item",
      date: new Date(2016,7,1)
    },
    {
      itemText: "second list item",
      date: new Date(2016,7,1)
    },
    {
      itemText: "third list item",
      date: new Date(2016,7,2)
    }
  ]

domready(() => {
  // mount point
  console.log("mount")
  render(<App listItems={testList} />, document.querySelector('#app'))
})
