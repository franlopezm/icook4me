const User = require(__base + 'models/User')

module.exports = (req, res) => {
  const {id} = req.params

  User
    .findById(id)
    .populate('likes')
    .populate({
      path: 'bookmarks',
      populate: {
        path: 'autor',
        select: 'id name image'
      }
    })
    .populate('followers')
    .populate('following')
    .populate('recipes')
    .then(user => res.json(user))
    .catch(err => { throw err })
}
