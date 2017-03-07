const express = require('express')
const path = require('path')
const app = express()

const routes = require('./app/routes')
const PORT = process.env.PORT || 3000
const publicFolder = path.join(__dirname, 'public')

app
  .use(express.static(publicFolder))
  .use(routes)
  .listen(PORT, () => console.log(`Magic happens on Port ${PORT}...`))
