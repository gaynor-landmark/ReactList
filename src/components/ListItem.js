"use strict"
var React = require('react')

module.exports = React.createClass({
  render: function(){
    //console.log("props", this.props)

    return (
      <tr>
        <td>&bull; &nbsp; &nbsp; {this.props.itemText}</td>
        <td>{this.props.itemDate}</td>
      </tr>
    )
  }
})
