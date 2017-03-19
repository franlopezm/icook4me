const express = require('express')
const Router = express.Router()

const getById = require('./handlers/getById')
const getAllById = require('./handlers/getAllById')
const updateUser = require('./handlers/updateUser')

Router
  .get('/:id', getById)
  .get('/all/:id', getAllById)
  .put('/:id', updateUser)

module.exports = Router
