const { response } = require('express')
const express = require('express')
const api = express()
api.get('/',(require,response)=>{
   return response.json([
      {name: 'João Paulo'},
      {name: 'Anne Caroline'}
   ])
})

api.listen('1234')