'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema
const wishelist = require('../models/wishelist')


const usersSchema = Schema({
    id_: Schema.Types.ObjectId,
    name: String,
    email: String,
    password: String,
    wishelist:[wishelist.schema]

   
})
module.exports = mongoose.model('Users', usersSchema)