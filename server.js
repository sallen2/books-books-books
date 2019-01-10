require('dotenv').config()
const express = require('express')
const routes = require('./routes/index')
const app = express()
const axios = require('axios')
const mongoose = require('mongoose')


const PORT = process.env.PORT || 3001

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('books/build'))
}

const search = "zelda"
axios({
    url: "https://api-v3.igdb.com/search",
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'user-key': '67e084e0ae7fc93c4a2f97f0e8616844'
    },
    data: `search "${search}"; fields game.name, game.url, game.storyline, game.genres.name;`
  })
    .then(response => {
        console.log(response.data);
    })
    .catch(err => {
        console.error(err);
    });

app.use(routes)

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/googlebooks')

app.listen(PORT, () => {
    console.log(`App is up on port ${PORT}`)
})