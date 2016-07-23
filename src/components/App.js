var React = require('react')
var HomePage = require('./homePage/HomePage')

var Nav = require('./Nav')


module.exports = React.createClass({

  render: function(){
    //console.log("passing state", this.state, this.props.listItems)

    return (

      <div className='container-fluid'>
        <div className='col-lg-4 col-lg-offset-1'>
          <div className='spacer'>
            <Nav />
          </div>
          <HomePage />
        </div>
      </div>
    )
  }
})
