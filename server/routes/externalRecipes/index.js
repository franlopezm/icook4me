const express = require('express')
const Router = express.Router()

const food2fork = require('./food2fork')
const edamam = require('./edamam')

Router
  .use('/food2fork', food2fork)
  .use('/edamam', edamam)

module.exports = Router
