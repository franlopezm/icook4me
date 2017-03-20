const express = require('express')
const Router = express.Router()

const getById = require('./handlers/getById')
const getAllById = require('./handlers/getAllById')
const updateById = require('./handlers/updateById')
const updateBookmark = require('./handlers/updateBookmark.js')

Router
  .get('/:id', getById)
  .get('/all/:id', getAllById)
  .put('/:id', updateById)
  .put('/bookmark/:id', updateBookmark)
module.exports = Router
