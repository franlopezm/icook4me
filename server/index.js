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
  /* Needed after deleting #! of the angular routes to redirect the page requests to the client */
  .get('/*', (req, res) => res.sendFile(path.join(__dirname, '../client/index.html')))

module.exports = app
