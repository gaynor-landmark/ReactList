"use strict"
var React = require('react')
var DateSelect =require('../DateSelect')
var DatedList = require('../DatedList')
var moment = require('moment')
var Nav = require('../Nav')

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
module.exports = React.createClass({
  getInitialState: function() {
    var today = new Date()
    console.log("initial state", today)
    today = moment(today.toDateString()).format('YYYY-MM-DD')
    return {startDate: today}
  },
  handleDateChange: function(mDate) {
    console.log("in handle date change in app.js")
    this.setState(
      {startDate: mDate}
    )
  },
  render: function() {
    return (

      <div className='col-lg-4 col-lg-offset-1'>

          <Nav />
          <div className='spacer'></div>
          <h1 >Todays List</h1>

          <p>Hello</p>
          <DateSelect startDate={this.state.startDate} handleDateChange={this.handleDateChange}/>
          <p></p>
          <DatedList listItems={testList} startDate={this.state.startDate}/>

      </div>

    )
  }
})
