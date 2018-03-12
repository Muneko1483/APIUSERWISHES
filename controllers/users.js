
'use strict'
const Users = require('../models/users')
const WisheList = require('../models/wishelist')

/*
function getUserByIdWisheListByID(req, res) {
	Users.find({}, function(err, users) {
    	WisheList.populate(users, {path: "wishelist"},function(err, users){
        	res.status(200).send(users);
        }); 
    });
}*/

function getUsers(req, res){
    Users.find({}).sort({'_id': -1}).exec((err,users ) =>{
        if(err) return res.status(500).send({message:`Error making the request: ${err}` })
        if(!users) return res.status(404).send({message: `The usernames do not exist`})
           
            res.status(200).send({users})
    })   
}

function getUserById (req, res){
    let userId = req.params.userId;

    Users.findById(userId).exec ((err,users) =>{
        if(err) return res.status(500).send({message:`Error making the request: ${err}` })
        if(!users) return res.status(404).send({message: `Username does not exist`})

        res.status(200).send({users})
             })
}

function saveUsers(req, res){
    console.log('POST /users')
    console.log(req.body)
 
    let users = new Users()
     users.name =req.body.name
     users.email= req.body.email
     users.password = req.body.password
    

 
     users.save((err,usersStored) =>{
         if(err) res.status(500).send({message: `Error to save the database ${err}`})
 
         res.status(200).send({users: usersStored})
     })

}

function updateUsers(req, res){
    let userId = req.params.userId
    let update = req.body

    Users.findByIdAndUpdate(userId, update,(err, usersUpdate) => {
        if(err) res.status(500).send({message: `Error updating the user: ${err}`})

        res.status(200).send({ users: usersUpdate})
    })
}

function deleteUsers (req, res){
    let userId = req.params.userId
    let delet = req.body

        Users.findByIdAndRemove(userId, delet, (err,usersdelet) =>{
            if(err) res.status(500).send({message: `Error deleting the user: ${err}`})
            res.status(200).send({users:usersdelet})
        
            }) 
}
    
module.exports = {
   // getUserByIdWisheListByID,
    getUsers,
    getUserById,
    saveUsers,
    updateUsers,
    deleteUsers
}