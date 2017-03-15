const fs = require('fs')
const thereisDotEnv = fs.existsSync('.env')
if (thereisDotEnv) require('dotenv').config()

const app = require('./server')
const db = require('./server/db')

const dbURI = process.env.DB_URI
const PORT = process.env.PORT

db.open(dbURI)
app.listen(PORT, () => console.log(`Magic happens on Port ${PORT}...`))
