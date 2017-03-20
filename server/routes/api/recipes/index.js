const express = require('express')
const Router = express.Router()

const getAll = require('./handlers/getAll')
const getAllAutorPop = require('./handlers/getAllAutorPop')

Router
  .get('/', getAll)
  .get('/autorpop', getAllAutorPop)

module.exports = Router
