"use strict"
import request from 'superagent'

module.exports = function(url, callback){
//  console.log('in client-side getrequest', url)
  request
  .get(url)
  .end(function(err, res) {
  //  console.log("res body", res.body)
    callback(res.body)
  })
}
