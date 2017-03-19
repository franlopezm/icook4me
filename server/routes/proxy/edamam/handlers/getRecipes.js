const getJSON = require('get-json')
const getUrl = require('url')

const apiKeyEdamam = process.env.EDAMAM_API_KEY
const appIdEdamam = process.env.EDAMAM_APP_ID

let cacheRecipesEdamam = {}

module.exports = (req, res) => {
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
              let urlsite = getUrl.parse(recipe.url).hostname
              let oRecipe = {}
              oRecipe.title = recipe.label
              oRecipe.image = recipe.image
              oRecipe.autor = {
                name: recipe.source,
                url: urlsite
              }
              oRecipe.urlExternal = recipe.url
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
