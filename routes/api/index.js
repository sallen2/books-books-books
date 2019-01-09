const router = require('express').Router()
const routes = require('./books')

router.use('/books', routes)

module.exports = router