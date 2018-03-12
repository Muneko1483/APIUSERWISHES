

'use strict'

const express = require('express')
const usersCtrl = require('../controllers/users')
const wishesCtrl = require('../controllers/wishelist')

const users = express.Router()

users.get('/',usersCtrl.getUsers)
users.get('/:userId',usersCtrl.getUserById)
users.post('/',usersCtrl.saveUsers) 
users.put('/:userId',usersCtrl.updateUsers) 
users.delete('/:userId',usersCtrl.deleteUsers) 
//users.get('/:usersId/wishs/:wishsId',wishsCtrl.getWishs)

const wishelist = express.Router()

wishelist.get('/',wishesCtrl.getWishes)
wishelist.get('/:wisheId',wishesCtrl.getWisheById) 
users.post('/:userId/wishelist',wishesCtrl.saveWishe) 
wishelist.put('/:wisheId',wishesCtrl.updateWishe)
wishelist.delete('/:wisheId',wishesCtrl.deleteWishe) 


const root = express.Router()

root.use('/users', users)
root.use('/wishelist', wishelist)

module.exports = root