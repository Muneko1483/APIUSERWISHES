'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const usersSchema = Schema({
    name: String,
    email: String,
    password: String,
    wishelist:{type: Schema.ObjectId,ref: "wishelist"}

   
})
module.exports = mongoose.model('Users', usersSchema)