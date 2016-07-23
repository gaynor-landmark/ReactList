"use strict"
import React from 'react'
import Nav from '../Nav'

module.exports = React.createClass({

  render: function() {
    return (
      <div className="container-fluid">
        <div className='col-lg-4 col-lg-offset-1'>
          <div className='spacer'></div>
          <Nav />
          <h1 >About</h1>

          <p>Tell me about yourself....</p>


        </div>
      </div>
    )
  }
})
