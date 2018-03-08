'use strict'

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const wishsListSchema = Schema({
    usersList:{type: Schema.ObjectId, ref: 'users'},
    wishsList:{type: Schema.ObjectId, ref:'wishs'}
})

module.exports = mongoose.model('whislist', wishsListSchema);


