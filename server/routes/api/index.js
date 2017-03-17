const express = require('express')
const Router = express.Router()
const passport = require(__base + 'config/passport')

const user = require('./user')
const users = require('./users')
const recipe = require('./recipe')
const recipes = require('./recipes')

Router
  // .use(passport.authenticate('jwt', { session: false }))
  .use('/user', user)
  .use('/users', users)
  .use('/recipe', recipe)
  .use('/recipes', recipes)

module.exports = Router
