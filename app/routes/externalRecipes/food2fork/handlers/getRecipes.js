const getJSON = require('get-json')

const apiKeyFood2Fork = process.env.FOOD2FORK_API_KEY || require('./../../../../../api').apiKeyFood2Fork

let cacheRecipes = {}

module.exports = (req, res) => {
  const {q = '', page = 1} = req.query
  const url = `http://food2fork.com/api/search?key=${apiKeyFood2Fork}&q=${q}&page=${parseInt(page)}`

  if (cacheRecipes[url]) {
    res.json(cacheRecipes[url])
  } else {
    getJSON(url, function (error, response) {
      if (!error) {
        let jsonRecipes = response

        jsonRecipes = jsonRecipes.recipes.map((recipe, i) => {
          let oRecipe = {}
          oRecipe.title = recipe.title
          oRecipe.image = recipe.image_url
          oRecipe.publisher = recipe.publisher
          oRecipe.url = recipe.source_url
          oRecipe.id_recipe = recipe.recipe_id
          return oRecipe
        })

        cacheRecipes[url] = jsonRecipes
        res.json(jsonRecipes)
      } else {
        res.json({'status': 'ko', 'msg': 'Recipes not found'})
      }
    })
  }
}
