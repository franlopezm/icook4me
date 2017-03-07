const request = require('request')
const cheerio = require('cheerio')

const recipesEdamam = require('./getRecipes').recipesEdamam
let cacheRecipeDetailsEdamam = {}

let sourcesEdamam = {
  'KiwiLimon': '.pasos',
  'Cookpad Spain': '#steps ol',
  'Canal Cocina': 'article.cooking div',
  'Hogarmania': '.ficha',
  'Que Rica Vida': '.recipePartStepsList',
  'Recetal Comidas': '[itemprop="recipeInstructions"]',
  'Hogar Util': '.ficha',
  'Hola - Cocina y Recetas': '.robapaginas-blogs + .entry',
  'Comida Kraft': '[itemprop="recipeInstructions"]'
}

module.exports = (req, res) => {
  let idRecipe = req.params.id
  let recipeResponse = recipesEdamam[idRecipe]
  let publisher = recipeResponse.source
  let apiUrl = req.url

  if (cacheRecipeDetailsEdamam[apiUrl]) {
    res.json(cacheRecipeDetailsEdamam[apiUrl])
  } else if (Object.keys(sourcesEdamam).includes(publisher)) {
    request(recipeResponse.url, function (error, response, html) {
      let $ = cheerio.load(html)

      $(sourcesEdamam[publisher]).filter(function () {
        let $data = $(this)

        $data.find('.adsense_block.adsense_csi').remove()
        $data.find('script').remove()
        $data.find(':contains("Foto y fuente:")').remove()
        $data.find('.media__img-rev').remove()

        recipeResponse.description_text = $data.text()
        recipeResponse.description_html = $data.html()
      })

      cacheRecipeDetailsEdamam[apiUrl] = recipeResponse
      res.json(recipeResponse)
    })
  } else {
    res.json({'status': 'ko', 'msg': 'Recipe not found'})
  }
}
