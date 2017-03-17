const User = require(__base + 'models/User')

module.exports = (req, res) => {
  const {id} = req.params

  User
    .findById(id)
    .populate('likes')
    .populate('bookmarks')
    .populate('followers')
    .populate('following')
    .populate('recipes')
    .then(user => res.json(user))
    .catch(err => { throw err })
}
