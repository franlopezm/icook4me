const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')

const routes = require('./routes')
const app = express()

app
  .use(express.static(path.join(__dirname, '../client')))
  .use(bodyParser.urlencoded({extended: false}))
  .use(bodyParser.json())

  .use(routes)
  // .get('/*', (req, res) => res.sendFile(path.join(__dirname, '../client/index.html')))

module.exports = app
