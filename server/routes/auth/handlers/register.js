const User = require(__base + 'models/User')

function register (req, res) {
  const { username, password } = req.body
  const name = username
  const account = new User({ name, username })

  User.register(account, password, err => {
    if (err) {
      return res.json({success: false, msg: 'Username already exists.'})
    }
    res.json({success: true, msg: 'Successful created new user.'})
  })
}

module.exports = register
