const express = require('express')
const Router = express.Router()

const getAll = require('./handlers/getAll')
const getAllPopulate = require('./handlers/getAllPopulate')

Router
  .get('/', getAll)
  .get('/allpopulate', getAllPopulate)

module.exports = Router
