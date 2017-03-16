const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.ObjectId
// const Recipe = mongoose.model('Recipe')
const passportLocalMongoose = require('passport-local-mongoose')

const User = new mongoose.Schema({
  name: {type: String, required: true},
  image: String,
  description: String,
  like: [{type: ObjectId, ref: 'Recipe'}],
  bookmarks: [{type: ObjectId, ref: 'Recipe'}],
  followers: [{type: ObjectId, ref: 'User'}],
  following: [{type: ObjectId, ref: 'User'}],
  recipe: [{type: ObjectId, ref: 'Recipe'}]
})

User.plugin(passportLocalMongoose)

module.exports = mongoose.model('User', User)
