const User = require(__base + 'models/User')

function register (req, res) {
  const { username, password, name, image } = req.body
  const account = new User({ name, image, username })

  User.register(account, password, err => {
    if (err) {
      return res.json({success: false, msg: 'Username already exists.'})
    }
    res.json({success: true, msg: 'Successful created new user.'})
  })
}

module.exports = register
