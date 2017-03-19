const Recipe = require(__base + 'models/Recipe')

module.exports = (req, res) => {
  const {id} = req.params
  let {title, image, description, ingredients, steps} = req.body

  Recipe
    .findByIdAndUpdate(id, {title, image, description, ingredients, steps})
    .then(recipe => res.json(recipe))
    .catch(err => res.json({success: false, msg: 'Error updating user'}))
}
