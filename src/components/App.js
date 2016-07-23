var React = require('react')
var List = require('./List')
var DateSelect =require('./DateSelect')
var Nav = require('./Nav')
var moment = require('moment')

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
  render: function(){
    //console.log("passing state", this.state, this.props.listItems)

    return (

      <div className='container-fluid'>
        <div className='col-lg-4 col-lg-offset-1'>
          <div className='spacer'>
            <Nav />
          </div>

          <div className='spacer'>
            <h1 >Todays List</h1>
            </div>
            <p>Hello</p>
            <DateSelect startDate={this.state.startDate} handleDateChange={this.handleDateChange}/>
            <p></p>
            <List listItems={this.props.listItems} startDate={this.state.startDate}/>
            </div>
      </div>
    )
  }
})
