const mongoose = require('mongoose')
mongoose.Promise = global.Promise

const db = mongoose.connection

db
  .on('error', (err) => console.log(`Mongoose default connection error: ${err}`))
  .on('disconnected', () => console.log('Mongoose default connection disconnected'))

module.exports = db
