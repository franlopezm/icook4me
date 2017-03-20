const Recipe = require(__base + 'models/Recipe')

module.exports = (req, res) => {
  Recipe
    .find()
    .sort({createdAt: -1})
    .populate('autor', 'name image url')
    .then(recipes => res.json(recipes))
    .catch(err => res.status(500).json(err))
}
