const fs = require('fs')
const path = require('path')
const thereisDotEnv = fs.existsSync('.env')
if (thereisDotEnv) require('dotenv').config()

global.__base = path.join(__dirname, '/server/')

const app = require('./server')
const db = require('./server/config/db')

const dbURI = process.env.DB_URI
const PORT = process.env.PORT

db.open(dbURI)
app.listen(PORT, () => console.log(`Magic happens on Port ${PORT}...`))
