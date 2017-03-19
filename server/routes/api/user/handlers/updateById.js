const User = require(__base + 'models/User')

module.exports = (req, res) => {
  const {id} = req.params
  let {name, image, description} = req.body
  User
    .findByIdAndUpdate(id, {name, image, description})
    .then(user => res.json({success: true, msg: 'User update'}))
    .catch(err => res.json({success: false, msg: 'Error updating user'}))
}
