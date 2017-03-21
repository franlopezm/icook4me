const express = require('express')
const Router = express.Router()

const getById = require('./handlers/getById')
const getAllById = require('./handlers/getAllById')
const add = require('./handlers/add')
const updateById = require('./handlers/updateById')
const updateLike = require('./handlers/updateLike')
const addExternal = require('./handlers/addExternal')

Router
  .post('/', add)
  .get('/:id', getById)
  .put('/:id', updateById)
  .post('/external', addExternal)
  .get('/all/:id', getAllById)
  .put('/like/:id', updateLike)

module.exports = Router
