const Recipe = require(__base + 'models/Recipe')

module.exports = (req, res) => {
  Recipe
    .find()
    .populate('likes')
    .then(recipes => res.json(recipes))
    .catch(err => res.status(500).json(err))
}
