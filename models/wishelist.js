'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema
const user= require('../models/users')


const wishesSchema = Schema({
    name: String,
    priority: String,
    description : String,
   // user :[{type: Schema.Types.ObjectId, ref:'Users'}]

   
})

module.exports =  mongoose.model('wishelist',wishesSchema)
/*
module.exports = {
   mimodelo:  mongoose.model('wishelist',wishesSchema), 
   schema: wishesSchema 
}*/