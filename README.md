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


## Installation

You need to have installed [NodeJS](https://nodejs.org/) with [npm](https://www.npmjs.com/), [bower](https://bower.io/) and [MongoDB](https://www.mongodb.com/)

### Configuration `env` file
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


### To run the server:
```
    npm start
```
All dependencies will be installed automatically


## API  
The server part has multiple Api endpoints using several routes:

`/api` -> Serves the internal data of the users and recipes.
`/auth` -> Serves the authentication options, register and login.
`/proxy` -> Serves the external recipes.
`/uploadImg` -> Serves the routes to upload pictures.

## Built with:
* **SublimeText**
* **Front-end**
    - AngularJS 1.6.3
    - Angular-route: 1.6.3
    - Angular-jwt: 0.1.9
    - NgInfiniteScroll: 1.3.4
    - Ng-file-upload-shim: 12.2.13
    - Ng-file-upload: 12.2.13
    - Bootstrap: 3.3.7
    - Font-awesome: 4.7.0
* **Back-end**
    - express: 4.15.2
    - dotenv: 4.0.0
    - get-json: 0.0.3
    - body-parser: 1.17.1
    - jsonwebtoken: 7.3.0
    - mongoose: 4.9.0
    - passport: 0.3.2
    - passport-jwt: 2.2.1
    - passport-local-mongoose: 4.0.0
    - bower: 1.8.0
    - multer: 1.3.0
    - cloudinary: 1.8.0
    - del: 2.2.2

## Authors
[Francisco  López](https://github.com/FransLopez)

## References
- [Food2fork](http://food2fork.com/)
- [Edamam](https://www.edamam.com/)
- [Cloudinary](http://cloudinary.com/)
- [ngInfiniteScroll](https://sroze.github.io/ngInfiniteScroll/)


