const Recipe = require(__base + 'models/Recipe')

module.exports = (req, res) => {
  const {id} = req.params

  Recipe
    .findById(id)
    .then(recipe => res.json(recipe))
    .catch(err => { throw err })
}
