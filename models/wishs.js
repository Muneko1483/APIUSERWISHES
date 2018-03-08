'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const wishsSchema = Schema({
    name: String,
    priority: String,
    description : String
})
module.exports = mongoose.model('wishs',wishsSchema)