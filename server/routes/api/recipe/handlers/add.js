const Recipe = require(__base + 'models/Recipe')
const User = require(__base + 'models/User')

module.exports = (req, res) => {
  const {title, image, description, ingredients, steps, autor} = req.body

  const recipe = new Recipe({title, image, description, ingredients, steps, autor})

  recipe.save()
    .then(recipe => {
      User
        .findByIdAndUpdate(autor, {'$push': {recipes: recipe.id}})
        .then(data => res.json(recipe))
        .catch(err => res.sendStatus(500).json(err))
    })
    .catch(err => res.status(500).json(err))
}
