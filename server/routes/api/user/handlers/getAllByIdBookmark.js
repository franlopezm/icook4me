const User = require(__base + 'models/User')

module.exports = (req, res) => {
  const {id} = req.params

  User
    .findById(id)
    .populate({
      path: 'bookmarks',
      populate: {
        path: 'autor',
        select: 'id name image'
      }
    })
    .then(data => res.json(data))
    .catch(err => { throw err })
}
