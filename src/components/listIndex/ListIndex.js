"use strict"

import React from 'react'
import Nav from '../Nav'
import DateSelect from '../DateSelect'
import List from '../List'
//import ItemForm from '../ItemForm'

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
var theList
module.exports = React.createClass({
  getInitialState: function(){
    theList = testList
    return null
  },
  render: function() {
    return (
      <div className='container-fluid'>
        <div className='col-lg-4 col-lg-offset-1'>
          <Nav />
          <div className='spacer'></div>
          <h1 >List Index</h1>
          <List listItems={theList} />
          <ItemForm />
        </div>
      </div>
    )
  }
})
