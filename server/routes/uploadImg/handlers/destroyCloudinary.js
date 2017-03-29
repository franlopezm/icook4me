const cloudinary = require('cloudinary')

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API,
  api_secret: process.env.CLOUDINARY_API_SECRET
})

module.exports = (req, res, next) => {
  let {idpublic} = req.body
  if (idpublic) {
    idpublic = idpublic.substring(idpublic.lastIndexOf('/') + 1, idpublic.lastIndexOf('.'))

    cloudinary.uploader.destroy(idpublic, result => {
      res.sendStatus(200)
    })
  } else {
    next()
  }
}
