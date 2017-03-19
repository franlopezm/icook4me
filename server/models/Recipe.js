const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.ObjectId
const collection = 'recipes'

const Recipe = new mongoose.Schema({
  title: {type: String, required: true},
  image: String,
  description: String,
  ingredients: [String],
  steps: [String],
  createdAt: {type: Number, default: Date.now},
  autor: {type: ObjectId, ref: 'User'},
  urlExternal: String,
  likes: [{type: ObjectId, ref: 'User'}]
}, {collection})

module.exports = mongoose.model('Recipe', Recipe)
