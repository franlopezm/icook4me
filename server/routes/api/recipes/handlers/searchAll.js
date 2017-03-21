const Recipe = require(__base + 'models/Recipe')

module.exports = (req, res) => {
  const {q = ''} = req.query

  Recipe
    .find({$or: [{title: q}, {description: q}, {ingredients: q}, {steps: q}]})
    .populate('autor', 'name image url')
    .then(recipes => res.json(recipes))
    .catch(err => res.status(500).json(err))
}
