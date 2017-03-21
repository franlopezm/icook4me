const express = require('express')
const Router = express.Router()

const routesProxy = require('./proxy')
const routesAuth = require('./auth')
const routesApi = require('./api')
const routesUploadImg = require('./uploadImg')

Router
  .use('/auth', routesAuth)
  .use('/proxy', routesProxy)
  .use('/api', routesApi)
  .use('/upload', routesUploadImg)

module.exports = Router
