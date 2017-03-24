[![Skylab](https://github.com/FransLopez/logo-images/blob/master/logos/skylab-56.png)](http://www.skylabcoders.com/)  

[![AngularJS](https://github.com/FransLopez/logo-images/blob/master/logos/angularjs.png)](https://angularjs.org/)
[![AngularJS](https://github.com/Iggy-Codes/logo-images/blob/master/logos/angularjs.png)](https://angularjs.org/)
[![NodeJS](https://github.com/FransLopez/logo-images/blob/master/logos/nodejs.png)](https://nodejs.org/)
[![MongoDB](https://github.com/FransLopez/logo-images/blob/master/logos/mongodb.png)](https://www.mongodb.com/)

[![Bootstrap](https://github.com/FransLopez/logo-images/blob/master/logos/bootstrap.png)](http://getbootstrap.com/)
[![Bower](https://github.com/FransLopez/logo-images/blob/master/logos/bower.png)](https://bower.io/)
[![SASS](https://github.com/FransLopez/logo-images/blob/master/logos/sass.png)](http://sass-lang.com/)  
[![Standard - JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

# iCook4me

This repo contains full-stack project iCook4me in which users can share and search for kitchen recipes.

iCook4me is made with NodeJS and ExpressJS for the part of the server, and the client part is made with AngularJS.

### Installation

You need to have installed [NodeJS](https://nodejs.org/) with [npm](https://www.npmjs.com/), [bower](https://bower.io/) and [MongoDB](https://www.mongodb.com/)

#### Configuration `env` file
You need to create an **.env** file in the project root with the following environment variables configured:
- Port:
```
    PORT=3000
```

- Mongodb path and database to use:
```
    DB_URI=mongodb://localhost:27017/NAME_DB
```

- Secret word to encrypt users' passwords:
```
    SECRET=XXXXXXXXXXXXXXXXXXXXXX
```

- API key to upload images to cloudinary:
```
    UPLOAD_FOLDER=upload
    CLOUDINARY_NAME=XXXXXXX
    CLOUDINARY_API=XXXXXXXXXXXXXXXXXXXXXX
    CLOUDINARY_API_SECRET=XXXXXXXXXXXXXXXXXXXXXX
```

- API key to get food2fork and edaman external recipes
```
    FOOD2FORK_API_KEY=XXXXXXXXXXXXXXXXXXXXXX
    EDAMAM_API_KEY=XXXXXXXXXXXXXXXXXXXXXX
    EDAMAM_APP_ID=XXXXXX
```


#### To run the server:
```
    npm start
```
All dependencies will be installed automatically


