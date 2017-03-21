const getJSON = require('get-json')
const getUrl = require('url')

const apiKeyFood2Fork = process.env.FOOD2FORK_API_KEY

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
          let urlsite = getUrl.parse(recipe.publisher_url).hostname
          oRecipe.title = recipe.title
          oRecipe.image = recipe.image_url
          oRecipe.publisher = {
            name: recipe.publisher,
            url: urlsite,
            id: recipe.recipe_id
          }
          oRecipe.urlExternal = recipe.source_url
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
