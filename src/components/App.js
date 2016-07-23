var React = require('react')
var RouteHandler = require('react-router').RouteHandler

var Nav = require('./Nav')
import HomePage from './homePage/HomePage'


module.exports = React.createClass({

  render: function(){
    //console.log("passing state", this.state, this.props.listItems)
    return (
      <div className='container-fluid'>
          <HomePage />
      </div>
    )
  }
})
