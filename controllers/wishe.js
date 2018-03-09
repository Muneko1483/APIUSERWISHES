'use strict'

const Wishe = require('../models/wishes')

function getWishes (req, res){
    Wishe.find({}).sort({'_id': -1}).exec ((err,wishes ) =>{
        if(err) return res.status(500).send({message:`Error making the request: ${err}` })
        if(!wishes) return res.status(404).send({message: `The wishes do not exist`})

        res.status(200).send({wishes})
    })   
}

function getWisheById (req, res){
    let wishesId = req.params.wisheId;

    Wishe.findById(wishesId).exec ((err,wishes) =>{
        if(err) return res.status(500).send({message:`Error making the request: ${err}` })
        if(!wishes) return res.status(404).send({message: `Wish does not exist`})

        res.status(200).send({wishes})
             })
}

function saveWishe(req, res){
    console.log('POST /wishe')
    console.log(req.body)
 
    let wishes = new Wishe()
     wishes.name =req.body.name
     wishes.priority= req.body.priority
     wishes.description = req.body.description
 
     wishes.save((err,wishesStored) =>{
         if(err) res.status(500).send({message: `Error saving the database ${err}`})
 
         res.status(200).send({wishes: wishesStored})
     })

}

function updateWishe(req, res){
    let wishesId = req.params.wisheId
    let update = req.body

    Wishe.findByIdAndUpdate(wishesId, update,(err, wishesUpdate) => {
        if(err) res.status(500).send({message: `Error updating wish: ${err}`})

        res.status(200).send({ wishes: wishesUpdate})
    })
}

function deleteWishe (req, res){
    let wishesId = req.params.wisheId
    let delet = req.body

        Wishe.findByIdAndRemove(wishesId, delet, (err,wishesdelet) =>{
            if(err) res.status(500).send({message: `Error al borrar el deseo: ${err}`})
            res.status(200).send({wishes :wishesdelet})
        
            })
}

module.exports ={
    getWishes,
    getWisheById,
    saveWishe,
    updateWishe,
    deleteWishe
}