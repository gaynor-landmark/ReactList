"use strict"
var React = require('react')
var Router = require('react-router')
var DefaultRoute = Router.DefaultRoute
var Route = Router.Route

var routes = (
  <Route name="app" path='/' handler={require('./components/app')}>
    <DefaultRoute handler={require('./components/homePage/HomePage')}>
    <Route name="about" handler={require('./about/AboutPage')}>
    <Route name="listIndex" handler={require('./listIndex/ListIndex')}>
  </Route>
)

module.exports = routes
