

'use strict'

const express = require('express')
const usersCtrl = require('../controllers/users')
const wishesCtrl = require('../controllers/wishe')
const users = express.Router()

users.get('/',usersCtrl.getUsers)
users.get('/:usersId',usersCtrl.getUserById)
users.post('/',usersCtrl.saveUsers) 
users.put('/:usersId',usersCtrl.updateUsers) 
users.delete('/:usersId',usersCtrl.deleteUsers) 
//users.get('/:usersId/wishs/:wishsId',wishsCtrl.getWishs)

const wishe = express.Router()

wishe.get('/',wishesCtrl.getWishes)
wishe.get('/:wisheId',wishesCtrl.getWisheById) 
wishe.post('/',wishesCtrl.saveWishe) 
wishe.put('/:wisheId',wishesCtrl.updateWishe)
wishe.delete('/:wisheId',wishesCtrl.deleteWishe) 


const root = express.Router()

root.use('/users', users)
root.use('/wishe', wishe)

module.exports = root