"use strict"
import React from 'react'
import DateSelect from '../DateSelect'
import DatedList from '../DatedList'
import moment from 'moment'
import Nav from '../Nav'
import ItemForm from '../ItemForm'
import getRequest from '../../getRequest'
import postRequest from '../../postRequest'

  var testList = []
module.exports = React.createClass({

  getInitialState: function() {
    var today = new Date()
    console.log("initial state", today)
    today = moment(today.toDateString()).format('YYYY-MM-DD')
    var url = 'http://localhost:4000'
    getRequest(url + '/testList', this.dbSetState)
    return {startDate: today, listItems: testList}
  },
  componentDidMount: function() {
    // get all the list items from the database
    console.log('componentDidMount')
    var url = 'http://localhost:4000'
  //  getRequest(url + '/testList', this.dbSetState)
    console.log('test the post')
    postRequest(url + '/addItem', {listItem: 'hello'}, this.dbSetState )
  },

  dbSetState: function (data, err) {
    console.log('setstate',err, data)
    testList = data
    this.setState({listItems: data})

  },

  handleDateChange: function(mDate) {
    console.log("in handle date change in app.js")
    this.setState(
      {startDate: mDate}
    )
  },
  render: function() {
console.log("state", this.state)
    return (

      <div className='col-lg-4 col-lg-offset-1'>

          <Nav />
          <div className='spacer'></div>
          <h1 >Lots on today - better get started!</h1>

          <p>Hello</p>
          <DateSelect startDate={this.state.startDate} handleDateChange={this.handleDateChange}/>
          <p></p>
          <DatedList listItems={this.state.listItems} startDate={this.state.startDate}/>
          <ItemForm />
      </div>

    )
  }
})
