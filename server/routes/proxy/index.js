const express = require('express')
const Router = express.Router()
const passport = require(__base + 'config/passport')

const food2fork = require('./food2fork')
const edamam = require('./edamam')

Router
  .use(passport.authenticate('jwt', { session: false }))
  .use('/food2fork', food2fork)
  .use('/edamam', edamam)

module.exports = Router
