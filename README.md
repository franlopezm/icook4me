[![Skylab](https://github.com/FransLopez/logo-images/blob/master/logos/skylab-56.png)](http://www.skylabcoders.com/)  
[![AngularJS](https://github.com/FransLopez/logo-images/blob/master/logos/angularjs.png)](https://angularjs.org/)
[![NodeJS](https://github.com/FransLopez/logo-images/blob/master/logos/nodejs.png)](https://nodejs.org/)
[![MongoDB](https://github.com/FransLopez/logo-images/blob/master/logos/mongodb.png)](https://www.mongodb.com/)  
[![Bootstrap](https://github.com/FransLopez/logo-images/blob/master/logos/bootstrap.png)](http://getbootstrap.com/)
[![Bower](https://github.com/FransLopez/logo-images/blob/master/logos/bower.png)](https://bower.io/)
[![SASS](https://github.com/FransLopez/logo-images/blob/master/logos/sass.png)](http://sass-lang.com/)  
[![Standard - JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

## iCook4me Your Recipe App

### Endpoints Api for external recipes
This functionality is based on the project **[Node-scrapper-recipes](https://github.com/juanmaguitar/node-scrapper-recipes)** of **[Juanmaguitar](https://github.com/juanmaguitar)**

---

This project gets recipes based on the http://food2fork.com/ and https://www.edamam.com/ API's and scraping the targeted urls to get the full recipes

#### food2fork _endpoints_
It serve a unique keypoint `/external/food2fork` that accepts two parameters:
- `q`: query for the recipe
- `page`: Page between results

    /external/food2fork
    /external/food2fork?q=pollo
    /external/food2fork?q=rice&page=2

This JSON serve a array if recipes w/ the form:

    {
        publisher: "The Pioneer Woman",
        f2f_url: "http://food2fork.com/view/7fcd69",
        title: "Chicken Spaghetti",
        source_url: "http://thepioneerwoman.com/cooking/2007/06/chicken_spaghet/",
        recipe_id: "7fcd69",
        image_url: "http://static.food2fork.com/496652595_50b3c3e3b92634.jpg",
        social_rank: 99.99999999999605,
        publisher_url: "http://thepioneerwoman.com",
        url_details: "/food2fork/7fcd69"
    },

The property `url_details` can be used to do another request to get the details of the recipe

#### Details Recipes (food2fork)

    /external/food2fork/36830

This details `endpoint` is only enabled for the following sources:

- closetcooking.com
- thepioneerwoman.com
- www.twopeasandtheirpod.com
- www.101cookbooks.com
- whatsgabycooking.com
- www.mybakingaddiction.com
- simplyrecipes.com
- allrecipes.com

#### Edamam _endpoints_
It serve a unique keypoint `/external/edamam` that accepts three parameters:
- `q`: query for the recipe
- `page`: Page between results
- `limit`: Maximum number of objects returned on each page (default 20)


    /external/edamam?q=tomate
    /external/edamam?q=tomate&page=1
    /external/edamam?q=tomate&page=1&limit=2

The property `details_url` can be used to do another request to get the details of the recipe

### Details Recipes (edamam)

    /external/edamam/4d5eb7a575380b78e67b64de74ddc864

This details `endpoint` is only enabled for the following "providers":

- KiwiLimon
- Cookpad Spain
- Canal Cocina
- Hogarmania
- Que Rica Vida
- Recetal Comidas
- Hogar Util
- Hola - Cocina y Recetas
- Comida Kraft

### Installation

To run local server...

    FOOD2FORK_API_KEY=XXXXXX EDAMAM_API_KEY=XXXXXX EDAMAM_APP_ID=XXXXXX npm run dev

To run remotely (in heroku) the proper FOOD2FORK_API_KEY should be set before deploying...

    heroku config:set FOOD2FORK_API_KEY=XXXXXXXXXXXXXXXXXXXXXXXX
    heroku config:set EDAMAM_API_KEY=XXXXXXXXXXXXXXXXXXXXXXXX
    heroku config:set EDAMAM_APP_ID=XXXXXXXXXXXXXXXXXXXXXXXX