var React = require('react')
var List = require('./List')

module.exports = React.createClass({


  render: function(){
console.log("app.js", this.props.listItems)
    return (
      <div>
        <p>Hello</p>
        <List listItems={this.props.listItems}/>
      </div>
    )
  }
})
