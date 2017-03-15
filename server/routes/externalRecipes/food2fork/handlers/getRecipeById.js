const getJSON = require('get-json')
const request = require('request')
const cheerio = require('cheerio')

const apiKeyFood2Fork = process.env.FOOD2FORK_API_KEY || require('./../../../../../api').apiKeyFood2Fork

let cacheRecipeDetails = {}
const sourcesFood2Fork = {
  'closetcooking.com': '.recipe_post',
  'thepioneerwoman.com': '.entry-content',
  'www.twopeasandtheirpod.com': '.post.single-post',
  'www.101cookbooks.com': '.entrybody',
  'whatsgabycooking.com': '.entry-content',
  'www.mybakingaddiction.com': '.post.single-post',
  'simplyrecipes.com': '.recipe-description',
  'allrecipes.com': '.directions--section__steps'
}

module.exports = (req, res) => {
  const {id} = req.params
  const urlApiRecipe = `http://food2fork.com/api/get?key=${apiKeyFood2Fork}&rId=${id}`

  if (cacheRecipeDetails[urlApiRecipe]) {
    res.json(cacheRecipeDetails[urlApiRecipe])
  } else {
    getJSON(urlApiRecipe, (error, recipeResponse) => {
      let publisher = recipeResponse.recipe.publisher_url
      publisher = publisher.split('://')[1]

      if (Object.keys(sourcesFood2Fork).includes(publisher)) {
        request(recipeResponse.recipe.source_url, (error, response, html) => {
          let $ = cheerio.load(html)

          $(sourcesFood2Fork[publisher]).filter(function () {
            var $data = $(this)
            recipeResponse.recipe.description_text = $data.text()
            recipeResponse.recipe.description_html = $data.html()
          })
          cacheRecipeDetails[urlApiRecipe] = recipeResponse
          res.json(recipeResponse)
        })
      } else {
        res.json({'status': 'ko', 'msg': 'Recipe not found'})
      }
    })
  }
}
