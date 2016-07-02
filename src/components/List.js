var React = require('react')
var ListItem = require('./ListItem')

module.exports = React.createClass({



  render: function(){
    console.log("in list", this.props.listItems)
    var rows = this.props.listItems.map(function(item){
      console.log(<ListItem key={item.itemText} itemText={item.itemText} itemDate={item.date.getDate()} />)
      return <ListItem key={item.itemText} itemText={item.itemText}  itemDate={item.date.toDateString()}/>

    })
    console.log("rows", rows)
    return (
      <div className='row'>
        <div className='col-lg-4 col-lg-offset-4'>
          <table width='100%'>
            <thead>
              <tr>
                <th>Item</th><th>Link</th>
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
