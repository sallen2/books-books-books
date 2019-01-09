const mongoose = require('mongoose')

const Schema = mongoose.Schema

const BookSchema = new Schema({
    title: {type: String, required: true},
    authors: [String],
    description: String,
    image: String,
    link: String,
    date: {
        type: Date,
        default: Date.now
    }
})



module.exports = mongoose.model('Book', BookSchema)