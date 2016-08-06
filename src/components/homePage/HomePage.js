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
  var url = 'http://localhost:4000'  // need to swop this for env variable

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
    console.log('componentDidMount', url)

  //  getRequest(url + '/testList', this.dbSetState)

    postRequest(url + '/addList', {listName: 'hello'}, this.addItemToNewList )

  },

  addItemToNewList : function(err, newListID){
    console.log('addItemToNewList', newListID)
    postRequest(url + '/addItem', {ItemListID : newListID,
      ItemText : 'test item',
      ItemStatus : 0}, this.dbSetState)
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
