'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const wishesSchema = Schema({
    id_: Schema.Types.ObjectId,
    name: String,
    priority: String,
    description : String,
   
})
module.exports = {
   mimodelo:  mongoose.model('wishelist',wishesSchema), 
   schema: wishesSchema 
}