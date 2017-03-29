const express = require('express')
const Router = express.Router()

const getById = require('./handlers/getById')
const getAllById = require('./handlers/getAllById')
const add = require('./handlers/add')
const addExternal = require('./handlers/addExternal')
const updateById = require('./handlers/updateById')
const updateLike = require('./handlers/updateLike')
const deleteById = require('./handlers/deleteById')

Router
  .get('/:id', getById)
  .get('/all/:id', getAllById)
  .post('/', add)
  .post('/external', addExternal)
  .put('/:id', updateById)
  .put('/like/:id', updateLike)
  .delete('/:id', deleteById)

module.exports = Router
