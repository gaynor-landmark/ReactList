"use strict"
import React  from 'react'
import { Link } from 'react-router'

module.exports = React.createClass({
  render: function() {
    return (
      <div>
        <ul className="nav nav-tabs" role="tablist">
          <li className="active"><Link to='/'>Home</Link></li>
          <li><Link to='/listIndex'>List Index</Link></li>
          <li><Link to='/About'>About</Link></li>
        </ul>
      </div>
    )
  }
})
