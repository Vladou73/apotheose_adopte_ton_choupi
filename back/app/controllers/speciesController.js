const { response } = require('express');
const speciesMapper = require('../dataMappers/speciesMapper');
const Species = require('../models/species');

const speciesController = {
    allSpecies : async (_, response, next) => {
        console.log('enter speciesController.allSpecies')
        try {
            const species = await speciesMapper.findAll();
            response.json(species)
        } catch(error) {
            next(error)
        }
    }
}

speciesController.oneSpecies = async (request, response, next) => {
    console.log('enter speciesController.oneSpecies')
    try {
        const species = await speciesMapper.findOne(request.params.id);
        response.json(species);
    } catch (error) { // Error thrown in data mapper gets here
        next(error)
    }
}

speciesController.newSpecies = async (request, response, next) => {
    console.log('enter speciesController.newSpecies')
    // create instance of species directly from data sent through payload
    const newSpecies = new Species(request.body);
    
    try {
        await speciesMapper.save(newSpecies);
        response.json(newSpecies);
    } catch (error) {
        next(error)
    }
}

speciesController.deleteSpecies = async(request, response, next)=> {
    console.log('enter speciesController.deleteSpecies')
    const speciesId = Number(request.params.id);
    if (isNaN(speciesId)) {
        return response.status(400).json({
            error: `the provided id must be a number`
        });
    }
    try {
        const species = await speciesMapper.deleteOne(speciesId);
        response.json(species);
    } catch (error) { // Error thrown in data mapper gets here
        next(error)
    }
}

speciesController.editSpecies = async(request, response, next)=> {
    console.log('enter speciesController.editSpecies')
    const speciesId = Number(request.params.id);
    if (isNaN(speciesId)) {
        return response.status(400).json({
            error: `the provided id must be a number`
        });
    }

    //get the species data from DB
    let species = {}
    try {
        species = await speciesMapper.findOne(speciesId);
    } catch (error) { // Error thrown in data mapper gets here
        next(error)
    }

    //Check to keep only properties accepted from client side
    const acceptedProperties = ['name']
    for (prop in request.body){
            //change to species properties the updated values
        if (acceptedProperties.includes(prop)){
            species[prop] = request.body[prop];
        };
    }
    
    // update DB with species edited properties
    try {
        await speciesMapper.edit(species);
        response.json(species);
    } catch (error) { // Error thrown in data mapper gets here
        next(error)
    }


    //WIP  ==> TO DO LATER
    //create new Species instance with all the data
    // const editedspecies = new Species(species);
}

module.exports = speciesController;