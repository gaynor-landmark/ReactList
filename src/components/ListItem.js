"use strict"
var React = require('react')

module.exports = React.createClass({
  handleClick: function() {
  //  console.log("clicked")
  },
  render: function(){
    //console.log("props", this.props)

    return (
      <tr>
        <td>&bull; </td>
        <td><a href="#" onClick={this.handleClick}> {this.props.itemText}</a ></td>
        <td>{this.props.itemDate}</td>
      </tr>
    )
  }
})
