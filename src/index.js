var React = require('react')
var render = require('react-dom').render
var App = require('./components/App')
var domready = require('domready')
console.log('ready')
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
console.log(testList)
domready(() => {
  // mount point
  console.log("mount", testList)
  render(<App listItems={testList} />, document.querySelector('#app'))
})
