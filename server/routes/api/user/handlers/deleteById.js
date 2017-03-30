const User = require(__base + 'models/User')
const Recipe = require(__base + 'models/Recipe')

module.exports = (req, res) => {
  const {id} = req.params

  User
    .findById(id)
    .populate('recipes')
    .then(({recipes}) => {
      const ids = recipes.map(elem => elem.id)
      User
        .update({}, {'$pullAll': {likes: ids, bookmarks: ids, recipes: ids}}, {multi: true})
        .then(
          Recipe
            .findByIdAndRemove(ids)
            .then(() => {
              Recipe
                .update({}, {'$pull': {likes: id, bookmarks: id}}, {multi: true})
                .then(() => {
                  User
                    .findByIdAndRemove(id)
                    .then(() => res.status(200).json({msg: 'User deleted'}))
                })
            })
          )
    })
    .catch(err => res.status(500).json(err))
}
