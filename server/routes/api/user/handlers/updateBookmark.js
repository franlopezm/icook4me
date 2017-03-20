const User = require(__base + 'models/User')
const Recipe = require(__base + 'models/Recipe')

module.exports = (req, res) => {
  const {id} = req.params
  let {recipeId, bookmark} = req.body
  let operator = (bookmark === 1) ? '$push' : '$pull'
  User
    .findByIdAndUpdate(id, {[operator]: {bookmarks: recipeId}})
    .then(user => {
      Recipe
        .findByIdAndUpdate({_id: recipeId}, {[operator]: {bookmarks: id}})
        .then(res.json({success: true, msg: 'Like add'}))
        .catch(err => res.sendStatus(500).json(err))
    })
    .catch(err => res.status(500).json(err))
}
