const express = require('express')
const Router = express.Router()

const getById = require('./handlers/getById')
const getAllById = require('./handlers/getAllById')
const updateById = require('./handlers/updateById')
const updateBookmark = require('./handlers/updateBookmark.js')
const getAllByIdBookmark = require('./handlers/getAllByIdBookmark.js')
const deleteById = require('./handlers/deleteById')

Router
  .get('/:id', getById)
  .get('/all/:id', getAllById)
  .get('/bookmarks/:id', getAllByIdBookmark)
  .put('/:id', updateById)
  .put('/bookmark/:id', updateBookmark)
  .delete('/:id', deleteById)

module.exports = Router
