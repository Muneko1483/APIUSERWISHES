'use strict'

const Wishs = require('../models/wishs')

function getWishsById (req, res){
    let wishsId = req.params.wishsId

    Wishs.findById(wishsId, (err,wish) =>{
        if(err) return res.status(500).send({message:`Error al realizar la peticion: ${err}` })
        if(!wishs) return res.status(404).send({message: `El deseo no existe`})

        res.status(200).send({wishs})
             })
}

function getWishs (req, res){
    Wishs.find({}, (err,wishs ) =>{
        if(err) return res.status(500).send({message:`Error al realizar la peticion: ${err}` })
        if(!wishs) return res.status(404).send({message: `No existe no existe`})

        res.status(200).send({wishs})
    })   
}

function saveWishs(req, res){
    console.log('POST /user/:usersid/wishslist')
    console.log(req.body)
 
    let wishs = new Wishs()
     wishs.name =req.body.name
     wishs.priority= req.body.priority
     wishs.description = req.body.description
 
     wishs.save((err,wishsStored) =>{
         if(err) res.status(500).send({message: `Error al salvar la base de datos ${err}`})
 
         res.status(200).send({wishs: wishsStored})
     })

}

function updateWishs(req, res){
    let wishsId = req.params.wishsId
    let update = req.body

    Wishs.findByIdAndUpdate(wishsId, update,(err, wishsUpdate) => {
        if(err) res.status(500).send({message: `Error al actualizar el deseo: ${err}`})

        res.status(200).send({ wishs: wishsUpdate})
    })
}

function deleteWishs (req, res){
    let wishsId = req.params.wishsId
    let delet = req.body

        Wishs.findByIdAndRemove(wishsId, delet, (err,wishsdelet) =>{
            if(err) res.status(500).send({message: `Error al borrar el deseo: ${err}`})
            res.status(200).send({wishs:wishsdelet})
        
            })
}

module.exports ={
    getWishsById,
    getWishs,
    saveWishs,
    updateWishs,
    deleteWishs
}