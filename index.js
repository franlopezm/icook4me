const express = require('express')
const path = require('path')
const app = express()

const routes = require('./server/routes')
const PORT = process.env.PORT || 3000
const publicFolder = path.join(__dirname, 'client')

app
  .use(express.static(publicFolder))
  .use(routes)
  .get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, '/client/index.html'))
  })
  .listen(PORT, () => console.log(`Magic happens on Port ${PORT}...`))
