var React = require('react')
var moment = require('moment')
module.exports = React.createClass({
  handleChange: function() {
    this.props.handleDateChange(this.refs.filterDate.getDOMNode().value)
  },

  render: function(){

    var mDate = moment(this.props.startDate.toDateString()).format('YYYY-MM-DD')
    console.log(mDate)
    return (
      <div >
        <input type='date' ref='filterDate' onChange={this.handleChange} value={mDate} />
      </div>
    )
  }
})
