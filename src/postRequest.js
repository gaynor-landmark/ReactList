"use strict"
import request from 'superagent'

export default function (url, data, callback) {
  console.log('in client side post request', url, data)
  request
    .post(url)
    .send(data)
    .end(function(err, res) {
      console.log("in callback")
      callback(err, res)
  })
}
