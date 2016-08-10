"use strict"
import React from 'react'

module.exports = React.createClass({
  getInitialState: function() {
    //console.log("getinitialstTE ITEMFORM", this.props)
    return null
  },

  // addListItem: function(event) {
  //   console.log("addlistIte")
  //   event.preventDefault()
  //   console.log("handlesubmit")
  // //  postRequest(url + '/addList', {listName: 'hello'}, this.addItemToNewList )
  //
  //
  // },
  addItemToNewList : function(newListID){
    console.log('addItemToNewList', newListID)
    // postRequest(url + '/addItem', {ItemListID : newListID,
    //   ItemText : 'test item',
    //   ItemStatus : 0}, this.props.dbSetState)
  },
  msg: function(){
    alert("hello")
  },
  render: function() {
    console.log ("props", this.props)
    return (
      <div className="form-group">
        <form>
          <input type="text" className="form-control" name="newItem"
            placeholder='Add a new item to this list'
            value={this.props.newItem.ItemText}
            onChange={this.props.onChange} />

          <input type="button" value="save" className="btn btn-default" onClick={this.props.onSave}/>

        </form>
      </div>
  )}
})
