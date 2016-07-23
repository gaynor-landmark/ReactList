"use strict"

import React from 'react'
import Nav from '../Nav'

var DateSelect =require('../DateSelect')
var List = require('../List')

var testList = [
  {
    itemText: "index list item  1",
    date: new Date("2016-07-21")
  },
  {
    itemText: "index list item  10",
    date: new Date("2016-07-23")
  },
  {
    itemText: "index list item  100",
    date: new Date("2016-07-22")
  }
]
module.exports = React.createClass({

  
  render: function() {
    return (
      <div className='container-fluid'>
        <div className='col-lg-4 col-lg-offset-1'>
          <Nav />
          <div className='spacer'></div>
          <h1 >List Index</h1>
          <List listItems={testList} />
        </div>
      </div>
    )
  }
})
