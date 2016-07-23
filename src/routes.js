"use strict"
import React from 'react'
import { Router, Route, browserHistory, DefaultRoute } from 'react-router'

module.exports = (
  <Router history={browserHistory}>
    <Route path="/" component={require('./components/App')}/>
    <Route path="about" component={require('./components/about/AboutPage')}/>
    <Route path="listIndex" component={require('./components/listIndex/ListIndex')}/>
  </Router>
)
