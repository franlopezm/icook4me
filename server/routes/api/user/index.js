const express = require('express')
const Router = express.Router()

const getById = require('./handlers/getById')
const getAllById = require('./handlers/getAllById')

Router
  .get('/:id', getById)
  .get('/all/:id', getAllById)

module.exports = Router
