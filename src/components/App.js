var React = require('react')
var List = require('./List')
var DateSelect =require('./DateSelect')
var moment = require('moment')

module.exports = React.createClass({
  getInitialState: function() {
    var today = new Date()
    console.log("initial state", today)
    today = moment(today.toDateString()).format('YYYY-MM-DD')
    return {startDate: today}
  },
  handleDateChange: function(mDate) {
    console.log("in handle date change in  aoo.js")
    this.setState(
      {startDate: mDate}
    )
  },
  render: function(){
    //console.log("passing state", this.state, this.props.listItems)

    return (
      <div>
        <p>Hello</p>
        <DateSelect startDate={this.state.startDate} handleDateChange={this.handleDateChange}/>
        <List listItems={this.props.listItems} startDate={this.state.startDate}/>
      </div>
    )
  }
})
