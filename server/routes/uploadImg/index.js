const express = require('express')
const multer = require('multer')
const path = require('path')
const passport = require(__base + 'config/passport')

const uploadFolderPath = path.join(global.__base, process.env.UPLOAD_FOLDER)
const uploadCloudinary = require('./handlers/uploadCloudinary')
const destroyCloudinary = require('./handlers/destroyCloudinary')

const Router = express.Router()

const upload = multer({
  dest: uploadFolderPath
})

Router
  .use(passport.authenticate('jwt', { session: false }))
  .post('/', upload.single('file'), uploadCloudinary, (req, res) => {
    const { imageLink } = req
    res.status(200).json({ imageLink })
  })
  .post('/destroy', destroyCloudinary)

module.exports = Router
