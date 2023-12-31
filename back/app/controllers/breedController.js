const { response } = require('express');
const breedMapper = require('../dataMappers/breedMapper');
const Breed = require('../models/breed');


const breedController = {
    allBreeds : async (_, response, next) => {
        console.log('enter breedController.allbreeds')
        try {
            const breeds = await breedMapper.findAll();
            response.json(breeds)
        } catch(error) {
            next(error);
        }
    }
}

breedController.oneBreed = async (request, response, next) => {
    console.log('enter breedController.oneBreed')
    try {
        const breed = await breedMapper.findOne(request.params.id);
        response.json(breed);
    } catch (error) { // Error thrown in data mapper gets here
        next(error);
    }
}

breedController.newBreed = async (request, response, next) => {
    console.log('enter breedController.newBreed')
    // create instance of breed directly from data sent through payload
    const newBreed = new Breed(request.body);
    
    try {
        await breedMapper.save(newBreed);
        response.json(newBreed);
    } catch (error) {
        next(error);
    }
}

breedController.deleteBreed = async(request, response, next)=> {
    console.log('enter breedController.deleteBreed')
    const breedId = Number(request.params.id);
    if (isNaN(breedId)) {
        return response.status(400).json({
            error: `the provided id must be a number`
        });
    }
    try {
        const breed = await breedMapper.deleteOne(breedId);
        response.json(breed);
    } catch (error) {
        next(error);
    }
}

breedController.editBreed = async(request, response, next)=> {
    console.log('enter breedController.editBreed')
    const breedId = Number(request.params.id);
    if (isNaN(breedId)) {
        return response.status(400).json({
            error: `the provided id must be a number`
        });
    }

    //get the breed data from DB
    let breed = {}
    try {
        breed = await breedMapper.findOne(breedId);
    } catch (error) { // Error thrown in data mapper gets here
        next(error);
    }

    //Check to keep only properties accepted from client side
    const acceptedProperties = ['name','species_id']
    for (prop in request.body){
            //change to breed properties the updated values
        if (acceptedProperties.includes(prop)){
            breed[prop] = request.body[prop];
        };
    }
    
    // update DB with breed edited properties
    try {
        await breedMapper.edit(breed);
        response.json(breed);
    } catch (error) { // Error thrown in data mapper gets here
        next(error);
    }


    //WIP  ==> TO DO LATER
    //create new Breed instance with all the data
    // const editedbreed = new Breed(breed);
}

module.exports = breedController;