'use strict'
const Users = require('../models/users')

function getUsers (req, res){
    let usersId = req.params.usersId

    Users.findById(usersId, (err,users) =>{
        if(err) return res.status(500).send({message:`Error al realizar la peticion: ${err}` })
        if(!users) return res.status(404).send({message: `El deseo no existe`})

        res.status(200).send({users})
             })
}

function getUsers (req, res){
    Users.find({}, (err,users ) =>{
        if(err) return res.status(500).send({message:`Error al realizar la peticion: ${err}` })
        if(!users) return res.status(404).send({message: `No existe no existe`})

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
         if(err) res.status(500).send({message: `Error al salvar la base de datos ${err}`})
 
         res.status(200).send({users: usersStored})
     })

}

function updateUsers(req, res){
    let usersId = req.params.usersId
    let update = req.body

    Users.findByIdAndUpdate(usersId, update,(err, usersUpdate) => {
        if(err) res.status(500).send({message: `Error al actualizar el deseo: ${err}`})

        res.status(200).send({ users: usersUpdate})
    })
}

function deleteUsers (req, res){
    let usersId = req.params.usersId
    let delet = req.body

        Users.findByIdAndRemove(usersId, delet, (err,usersdelet) =>{
            if(err) res.status(500).send({message: `Error al borrar el deseo: ${err}`})
            res.status(200).send({users:usersdelet})
        
            })
}

module.exports ={
    getUsers,
    getUsers,
    saveUsers,
    updateUsers,
    deleteUsers
}