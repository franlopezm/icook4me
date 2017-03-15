const express = require('express')
const Router = express.Router()

const getRecipes = require('./handlers/getRecipes').getRecipes

Router
  .get('/', getRecipes)

module.exports = Router
