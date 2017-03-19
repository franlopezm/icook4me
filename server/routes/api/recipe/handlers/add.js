const Recipe = require(__base + 'models/Recipe')

module.exports = (req, res) => {
  const {title, image, description, ingredients, steps, autor} = req.body

  const recipe = new Recipe({title, image, description, ingredients, steps, autor})

  recipe.save()
    .then(data => res.json(data))
    .catch(err => res.status(500).json(err))
}
