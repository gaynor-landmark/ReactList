"use strict"
import request from 'superagent'

export default function (url, data, callback) {
//  console.log('in client side post request', url, data, callback)
  request
    .post(url)
    .send(data)
    .end(function(err, res) {
  //    console.log("in callback", err, res.text)
      if (err) {
  //      console.log("ERROR")
      } else {
  //      console.log("about to call back")
        callback(res.text)
      }
  })
}
