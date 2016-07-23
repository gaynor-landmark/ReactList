"use strict"
var React = require('react')

var ListItem = require('./ListItem')


module.exports = React.createClass({

  render: function(){

    var rows = this.props.listItems

      .map(function(item){

        return <ListItem key={item.itemText} itemText={item.itemText}/>
      })
    return (

        <div >
          <table width='100%' className='table'>
            <thead>
              <tr>
                <th>Item</th>
              </tr>
            </thead>
            <tbody>
              {rows}
            </tbody>
          </table>
        </div>

  )}
})
