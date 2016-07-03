var React = require('react')
var moment = require('moment')
module.exports = React.createClass({
  handleChange: function() {
    var x = document.getElementById('filterDate').value
    console.log(x, this.props)
    this.props.handleDateChange(x)
  },

  render: function(){

    var mDate = this.props.startDate
    console.log(mDate)
    return (
      <div >
        <input type='date' id='filterDate' onChange={this.handleChange} value={mDate} />
      </div>
    )
  }
})
