const express = require('express')
const router = express.Router()

const passport = require('../_passport')

const register = require('./handlers/register')
const login = require('./handlers/login')

router.use(passport.initialize())

router
  .post('/register', register)
  .post('/login', passport.authenticate('local', { session: false }), login)

module.exports = router
