const mongoose = require('mongoose')

module.exports = mongoose.model('Book', {
    BookName: { type: String },
    Author: { type: String },
    genre: { type: String },
    cost: { type: Number },
},)