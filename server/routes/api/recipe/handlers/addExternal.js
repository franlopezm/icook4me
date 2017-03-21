const Recipe = require(__base + 'models/Recipe')

module.exports = (req, res) => {
  const {title, image, publisher, urlExternal} = req.body

  Recipe
    .find({publisher})
    .then(recipe => {
      if (recipe.length > 0) {
        res.json(recipe)
      } else {
        const recipe = new Recipe({title, image, publisher, urlExternal})

        recipe.save()
          .then(recipe => res.json(recipe))
          .catch(err => res.status(500).json(err))
      }
    })
    .catch(err => { throw err })
}
