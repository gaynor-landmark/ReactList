"use strict"
import React from 'react'

module.exports = React.createClass({
  
  handleSubmit: function() {
    console.log("handlesubmit")
  },

  render: function() {
    return (
      <div className="form-group">
        <form action="handleSubmit">
          <input type="text" className="form-control" name="newItem" placeholder='Add a new item to this list'/>
          <input type="submit" value='Submit'/>
        </form>
      </div>
  )}
})
