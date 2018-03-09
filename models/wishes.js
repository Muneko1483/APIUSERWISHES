'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const wishesSchema = Schema({
    name: String,
    priority: String,
    description : String
})
module.exports = mongoose.model('wishe',wishesSchema)