import axios from 'axios'
import _ from 'lodash'

var _server = axios.create({
  baseURL: 'http://localhost:3000'
})

export function getReleases (callback) {
  _server.get('/releases').then(response => {
    let data = response.data.slice()
    // Derive headers from response keys, strip any values starting with _
    let keys = _.filter(Object.keys(data[0]), (key) => {
      return !_.startsWith(key, '_')
    })
    // Build header objs
    let headers = []
    keys.map((key) => {
      headers.push({
        text: _.capitalize(key),
        value: key,
        left: true
      })
    })
    // Use the callback to set headers and items
    callback(headers, data)
  }).catch(e => {
    console.log('There was an error when calling the server')
    console.log(e)
  })
}