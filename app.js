'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const app = express()
const allRoutes =require('./routes')


app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json())

app.use(allRoutes)



module.exports = app

