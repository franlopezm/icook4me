const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Recipe = new Schema({})

module.exports = mongoose.model('Recipe', Recipe)
