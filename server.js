const express = require('express')
const routes = require('./routes/index')
const app = express()
const mongoose = require('mongoose')

const PORT = process.env.PORT || 3001

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('books/build'))
}

app.use(routes)

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/googlebooks')

app.listen(PORT, () => {
    console.log(`App is up on port ${PORT}`)
})