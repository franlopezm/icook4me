const Recipe = require(__base + 'models/Recipe')

module.exports = (req, res) => {
  Recipe
    .find({urlExternal: {$exists: true}})
    .then(recipes => res.json(recipes))
    .catch(err => res.status(500).json(err))
}
