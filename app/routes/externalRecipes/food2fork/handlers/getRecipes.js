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
          recipe.url_details = '/food2fork/' + recipe.recipe_id
          return recipe
        })

        cacheRecipes[url] = jsonRecipes
        res.json(jsonRecipes)
      } else {
        res.json({'status': 'ko', 'msg': 'Recipes not found'})
      }
    })
  }
}
