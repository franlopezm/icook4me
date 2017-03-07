const express = require('express')
const Router = express.Router()

const externalRecipes = require('./externalRecipes')

Router
  .use('/external', externalRecipes)

module.exports = Router
