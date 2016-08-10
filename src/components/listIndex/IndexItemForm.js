"use strict"

import React from 'react'

module.exports = React.createClass({
  getInitialState : function(){
    console.log("index", this.props, this.state)
    return null
  },

  render : function(){
    return (
      <div>
        <form className='form-group'>
          <input type="text" className="form-control" name="newIndexItem"
            placeholder='Add a new List'
            value=""
            />
          <input type="button" value="save" className="btn btn-default"
            />
        </form>

      </div>
    )
  }

})
