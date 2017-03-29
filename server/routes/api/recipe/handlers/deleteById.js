const Recipe = require(__base + 'models/Recipe')
const User = require(__base + 'models/User')

module.exports = (req, res) => {
  const {id} = req.params

  Recipe
    .findByIdAndRemove(id)
    .then(recipe => {
      User
        .update({}, {'$pull': {likes: id, bookmarks: id, recipes: id}}, {multi: true})
        .then(response => res.status(200).json(response))
    })
    .catch(err => res.status(500).json(err))
}
