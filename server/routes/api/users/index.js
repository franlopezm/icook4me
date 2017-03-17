const express = require('express')
const Router = express.Router()

const getAll = require('./handlers/getAll')

Router
  .get('/', getAll)

module.exports = Router
