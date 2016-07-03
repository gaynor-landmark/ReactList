var React = require('react')
var moment = require('moment')

var ListItem = require('./ListItem')
var DateSelect = require('./DateSelect')

module.exports = React.createClass({

  render: function(){
    var startDate = moment( this.props.startDate).format('DD/MM/YYYY')
    var rows = this.props.listItems
      .filter(function(item){
        var fDate = moment(item.date.toDateString()).format('DD/MM/YYYY')
        return fDate === startDate
      })
      .map(function(item){
        var mDate = moment(item.date.toDateString()).format('DD/MM/YYYY')
        return <ListItem key={item.itemText} itemText={item.itemText} itemDate={mDate}/>
      })
    return (
      <div className='row'>
        <div className='col-lg-4 col-lg-offset-4'>
          <table width='100%'>
            <thead>
              <tr>
                <th>Symbol</th><th>Item</th><th>Date</th>
              </tr>
            </thead>
            <tbody>
              {rows}
            </tbody>
          </table>
        </div>
      </div>
  )}
})
