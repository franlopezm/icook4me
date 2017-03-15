const getJSON = require('get-json')

const apiKeyEdamam = process.env.EDAMAM_API_KEY || require('./../../../../../api').apiKeyEdamam
const appIdEdamam = process.env.EDAMAM_APP_ID || require('./../../../../../api').idEdamam

let cacheRecipesEdamam = {}
var recipesEdamam = {}

function getRecipes (req, res) {
  let {q = '', page = 1, limit = 10} = req.query
  page = parseInt(page) - 1
  limit = parseInt(limit)
  let from = (page > 0) ? page * limit : 0
  let to = from + limit
  const url = `https://test-es.edamam.com/search?app_id=${appIdEdamam}&app_key=${apiKeyEdamam}&q=${q}&from=${from}&to=${to}`

  if (cacheRecipesEdamam[url]) {
    res.json(cacheRecipesEdamam[url])
  } else {
    getJSON(url, function (error, response) {
      if (!error) {
        let jsonRecipes = response
        jsonRecipes = jsonRecipes.hits
            .map(hit => hit.recipe)
            .map(recipe => {
              let idRecipe = recipe.uri.split('#recipe_')[1]
              let urlsite = recipe.url.split('/')[2]
              let oRecipe = {}
              oRecipe.title = recipe.label
              oRecipe.image = recipe.image
              oRecipe.publisher = recipe.source
              oRecipe.publisher_url = urlsite
              oRecipe.url = recipe.url
              oRecipe.id_recipe_ext = idRecipe
              recipesEdamam[idRecipe] = oRecipe
              return oRecipe
            })

        cacheRecipesEdamam[url] = jsonRecipes
        res.json(jsonRecipes)
      } else {
        res.json({'status': 'ko', 'msg': 'Recipes not found'})
      }
    })
  }
}

module.exports.getRecipes = getRecipes
module.exports.recipesEdamam = recipesEdamam
