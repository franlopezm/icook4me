const express = require('express')
const Router = express.Router()

const getAll = require('./handlers/getAll')
const getAllAutorPop = require('./handlers/getAllAutorPop')
const searchAll = require('./handlers/searchAll')
const getAllExternal = require('./handlers/getAllExternal')

Router
  .get('/', getAll)
  .get('/autorpop', getAllAutorPop)
  .get('/search', searchAll)
  .get('/external', getAllExternal)

module.exports = Router
