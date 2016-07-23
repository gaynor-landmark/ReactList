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

        <div >
          <table width='100%' className='table'>
            <thead>
              <tr>
                <th>Item</th><th>Date</th>
              </tr>
            </thead>
            <tbody>
              {rows}
            </tbody>
          </table>
        </div>

  )}
})
