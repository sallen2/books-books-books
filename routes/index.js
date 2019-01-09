const router = require('express').Router()
const api = require('./api/index')
const path = require('path')

router.use('/api', api)

router.use((req,res)=>{
    res.sendFile(path.join(__dirname, '../books/build/index.html'))
})

module.exports = router

