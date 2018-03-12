'use strict'

const WisheList = require('../models/wishelist')

function getWishes (req, res){
    WisheList.find({}).sort({'_id': -1}).exec ((err,wishelist ) =>{
        if(err) return res.status(500).send({message:`Error making the request: ${err}` })
        if(!wishelist) return res.status(404).send({message: `The wishes do not exist`})

        res.status(200).send({wishelist})
    })   
}

function getWisheById (req, res){
    let wishelistId = req.params.wishelistId

    WisheList.findById(wishelistId).exec ((err,wishelist) =>{
        if(err) return res.status(500).send({message:`Error making the request: ${err}` })
        if(!wishelist) return res.status(404).send({message: `Wish does not exist`})

        res.status(200).send({wishelist})
             })
}

function saveWishe(req, res){
    console.log('POST /wishelist')
    console.log(req.body)
 
    let wishes = new WisheList()
     wishes.name =req.body.name 
     wishes.priority= req.body.priority
     wishes.description = req.body.description
 
     wishes.save((err,wishesStored) =>{
         if(err) res.status(500).send({message: `Error saving the database ${err}`})
 
         res.status(200).send({wishes: wishesStored})
     })

}

function updateWishe(req, res){
    let wishelistId = req.params.wishelistId
    let update = req.body

    WisheList.findByIdAndUpdate(wisheslistId, update,(err, wishelistUpdate) => {
        if(err) res.status(500).send({message: `Error updating wish: ${err}`})

        res.status(200).send({ wishelist: wishelistUpdate})
    })
}

function deleteWishe (req, res){
    let wishelistId = req.params.wishelistId
    let delet = req.body

        WisheList.findByIdAndRemove(wishelistId, delet, (err,wishelistdelet) =>{
            if(err) res.status(500).send({message: `Error al borrar el deseo: ${err}`})
            res.status(200).send({wishelist :wishelistdelet})
        
            })
}

module.exports ={
    getWishes,
    getWisheById,
    saveWishe,
    updateWishe,
    deleteWishe
}