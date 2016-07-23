var React = require('react')

module.exports = React.createClass({
  render: function() {
    return (
      <div>
        <ul className="nav nav-tabs" role="tablist">
          <li className="active"><a href="#">Home</a></li>
          <li><a href="#">Index</a></li>
          <li><a href="#">About</a></li>
        </ul>
      </div>
    )
  }
})
