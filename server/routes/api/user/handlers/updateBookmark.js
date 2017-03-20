const User = require(__base + 'models/User')

module.exports = (req, res) => {
  const {id} = req.params
  let {recipeId, bookmark} = req.body
  let operator = (bookmark === 1) ? '$push' : '$pull'
  User
    .findByIdAndUpdate(id, {[operator]: {bookmarks: recipeId}})
    .then(user => res.json({success: true, msg: 'bookmark add'}))
    .catch(err => res.status(500).json(err))
}
