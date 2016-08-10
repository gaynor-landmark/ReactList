var React = require('react')
var RouteHandler = require('react-router').RouteHandler

import Nav from './Nav'
import HomePage from './homePage/HomePage'


module.exports = React.createClass({

  render: function(){
    return (
      <div className='container-fluid'>
          <HomePage />
      </div>
    )
  }
})
