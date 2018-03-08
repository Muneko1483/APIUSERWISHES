

'use strict'

const express = require('express')
const usersCtrl = require('../controllers/users')
const wishsCtrl = require('../controllers/wishs')
const users = express.Router()

users.get('/',usersCtrl.getUsers)
users.get('/:usersId',usersCtrl.getUsers)
users.post('/',usersCtrl.saveUsers) 
users.put('/:usersId',usersCtrl.updateUsers) 
users.delete('/:usersId',usersCtrl.deleteUsers) 
//users.get('/:usersId/wishs/:wishsId',wishsCtrl.getWishs)

const wishs = express.Router()

wishs.get('/',wishsCtrl.getWishs)
wishs.get('/:wishsId',wishsCtrl.getWishsById) 
wishs.post('/',wishsCtrl.saveWishs) 
wishs.put('/:wishsId',wishsCtrl.updateWishs)
wishs.delete('/:wishsId',wishsCtrl.deleteWishs) 


const root = express.Router()

root.use('/users', users)
root.use('/wishs', wishs)

module.exports = root