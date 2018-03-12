

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
users.get('/:userId/wishelist/:wishelistId',usersCtrl.getUserByIdWisheListByID)

const wishelist = express.Router()


wishelist.get('/',wishesCtrl.getWishes)
wishelist.get('/:wishelistId',wishesCtrl.getWisheById) 
users.post('/:userId/wishelist',wishesCtrl.saveWishe) 
wishelist.put('/:wishelistId',wishesCtrl.updateWishe)
wishelist.delete('/:wishelistId',wishesCtrl.deleteWishe) 


const root = express.Router()

root.use('/users', users)
root.use('/wishelist', wishelist)

module.exports = root