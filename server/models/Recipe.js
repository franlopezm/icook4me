const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.ObjectId
const User = mongoose.model('User')
const collection = 'recipes'

const Recipe = new mongoose.Schema({
  title: {type: String, required: true},
  image: String,
  description: String,
  ingredients: [String],
  steps: [String],
  createdAt: {type: Number, default: Date.now},
  updatedAt: Number,
  autor: {
    name: {type: String, require: true},
    id: String,
    image: String,
    url: String
  },
  urlExternal: String,
  like: [{type: ObjectId, ref: 'User'}]
}, {collection})

module.exports = mongoose.model('Recipe', Recipe)
