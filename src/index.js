"use strict"
var React = require('react')
var render = require('react-dom').render
var App = require('./components/App')
var domready = require('domready')

domready(() => {
  // mount point
  console.log("mount")
  render(<App />, document.querySelector('#app'))
})
