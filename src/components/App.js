var React = require('react')
var List = require('./List')
var DateSelect =require('./DateSelect')


module.exports = React.createClass({
  getInitialState: function() {
    var today = new Date()
    console.log("initial state", today)
    return {startDate: today}
  },
  handleDateChange: function(mDate) {
    this.setState(
      {startDate: mDate}
    )
  },
  render: function(){
    //console.log("passing state", this.state, this.props.listItems)

    return (
      <div>
        <p>Hello</p>
        <DateSelect startDate={this.state.startDate}/>
        <List listItems={this.props.listItems} startDate={this.state.startDate}/>
      </div>
    )
  }
})
