'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema
const wisher = require('../models/wishelist')
const wishelist = mongoose.model('wishelist')





const usersSchema = Schema({

    name: String,
    email: String,
    password: String,
    wishe: [{type: Schema.Types.ObjectId, ref:'wishelist'}]
   
    //[wishelist.schema]
})

module.exports = mongoose.model('Users', usersSchema)