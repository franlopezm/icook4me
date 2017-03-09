const express = require('express')
const Router = express.Router()

const getRecipes = require('./handlers/getRecipes').getRecipes
// const getRecipe = require('./handlers/getRecipeById')

Router
  .get('/', getRecipes)
  // .get('/:id', getRecipe)

module.exports = Router
