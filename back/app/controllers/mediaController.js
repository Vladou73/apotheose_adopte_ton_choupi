const { response } = require('express');
const mediaMapper = require('../dataMappers/mediaMapper');
const Media = require('../models/media');


const mediaController = {}

mediaController.allMedias = async (_, response) => {
    console.log('enter mediaController.allmedias')
    const medias = await mediaMapper.findAll();
    response.json(medias)
}

mediaController.oneMedia = async (request, response) => {
    console.log('enter mediaController.oneMedia')
    try {
        const media = await mediaMapper.findOne(request.params.id);
        response.json(media);
    } catch (err) { // Error thrown in data mapper gets here
        response.status(404).json(err.message);
    }
}

mediaController.newMedia = async (request, response) => {
    console.log('enter mediaController.newMedia')
    // create instance of media directly from data sent through payload
    const newMedia = new Media(request.body);
    
    try {
        await mediaMapper.save(newMedia);
        response.json(newMedia);
    } catch (err) {
        response.status(403).json(err.message);
    }
}

mediaController.deleteMedia = async(request, response)=> {
    console.log('enter mediaController.deleteMedia')
    const mediaId = Number(request.params.id);
    if (isNaN(mediaId)) {
        return response.status(400).json({
            error: `the provided id must be a number`
        });
    }
    try {
        const media = await mediaMapper.deleteOne(mediaId);
        response.json(media);
    } catch (err) { // Error thrown in data mapper gets here
        response.status(404).json(err.message);
    }
}



mediaController.editMedia = async(request, response)=> {
    console.log('enter mediaController.editMedia')
    const mediaId = Number(request.params.id);
    if (isNaN(mediaId)) {
        return response.status(400).json({
            error: `the provided id must be a number`
        });
    }

    //get the media data from DB
    let media = {}
    try {
        media = await mediaMapper.findOne(mediaId);
    } catch (err) { // Error thrown in data mapper gets here
        response.status(404).json(err.message);
    }

    //Check to keep only properties accepted from client side
    const acceptedProperties = ['type','url']
    for (prop in request.body){
            //change to media properties the updated values
        if (acceptedProperties.includes(prop)){
            media[prop] = request.body[prop];
        };
    }
    
    // update DB with media edited properties
    try {
        await mediaMapper.edit(media);
        response.json(media);
    } catch (err) { // Error thrown in data mapper gets here
        response.status(404).json(err.message);
    }


    //WIP  ==> TO DO LATER
    //create new media instance with all the data
    // const editedmedia = new media(media);
}

module.exports = mediaController;