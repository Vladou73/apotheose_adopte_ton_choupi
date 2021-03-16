const { response } = require('express');
const animalMapper = require('../dataMappers/animalMapper');
const Animal = require('../models/animal');
const animalService = require('../services/animalService');
const mediaMapper = require('../dataMappers/mediaMapper');

const animalController = {}

animalController.allAnimals = async (request, response) => {
    console.log('enter animalController.allAnimals')
    // request paramter is used for pagination : limit & offset
    const animals = await animalMapper.findAll(request);

    //add animal age and age category
    animalsResult = animalService.addAgeLabels(animals);
    response.json(animalsResult);
}

animalController.oneAnimal = async (request, response) => {
    console.log('enter animalController.oneAnimal')
    const animalId = request.params.id;
    try {
        const animal = await animalMapper.findOne(animalId);
        response.json(animal);
    } catch (err) { // Error thrown in data mapper gets here
        response.status(404).json(err.message);
    }
}

animalController.newAnimal = async (request, response) => {
    console.log('enter animalController.newAnimal')
    
    //check if new medias have to be added to the DB ie check if client sends new urls in medias objects
    if (request.body['medias']) { // check if medias change have been asked
        for (media of request.body['medias']) { 
            if (media.url){//check for all media if it a new media (ie if an url is sent)
                await mediaMapper.save(media); //call mapper to save new media. Save/add the new media id in the request.body object
            }
        }
    }

    // on crée directement notre model à partir des données envoyées dans le payload
    const newAnimal = new Animal(request.body);
    // console.log('request.body',request.body);
    
    try {
        await animalMapper.save(newAnimal);
        response.json(newAnimal);
    } catch (err) {
        response.status(403).json(err.message);
    }
    console.log('newAnimal',newAnimal);
}

animalController.deleteAnimal = async (request, response)=>{
    console.log('enter animalController.deleteAnimal')
    const animalId = Number(request.params.id);
    if (isNaN(animalId)) {
        return response.status(400).json({
            error: `the provided id must be a number`
        });
    }
    try {
        const animal = await animalMapper.deleteOne(animalId);
        response.json(animal);
    } catch (err) { // Error thrown in data mapper gets here
        response.status(404).json(err.message);
    }
}

animalController.editAnimal = async (request, response)=>{
    console.log('enter animalController.editAnimal')
    const animalId = Number(request.params.id);
    if (isNaN(animalId)) {
        return response.status(400).json({
            error: `the provided id must be a number`
        });
    }

    //get the animal data from DB
    let animal = {}
    try {
        animal = await animalMapper.findOne(animalId);
    } catch (err) { // Error thrown in data mapper gets here
        response.status(404).json(err.message);
    }

    //check if new medias have to be added to the DB ie check if client sends new urls in medias objects
    if (request.body['medias']) { // check if medias change have been asked
        for (media of request.body['medias']) { 
            if (media.url){//check for all media if it a new media (ie if an url is sent)
                await mediaMapper.save(media); //call mapper to save new media. Save/add the new media id in the request.body object
            }
        }
    }

    //Check to keep only properties accepted from client side
    const acceptedProperties = ['name','birthdate','description','gender_id','breeds','tags','medias']
    //Check if other tables are impacted too (binding tables)
    let otherTablesImpacted = {};
    const otherTables = ['tags','breeds','medias']
    for (prop in request.body){
            //change to animal properties the updated values
        if (acceptedProperties.includes(prop)){
            animal[prop] = request.body[prop];
        };
        if (otherTables.includes(prop)){
            otherTablesImpacted[prop] = true;
        };
    }

       
    console.log('otherTablesImpacted',otherTablesImpacted)
    // update DB with animal edited properties
    try {
        await animalMapper.edit(animal, otherTablesImpacted);
        response.json(animal);
    } catch (err) { // Error thrown in data mapper gets here
        response.status(404).json(err.message);
    }


    //WIP  ==> TO DO LATER
    //create new animal instance with all the data
    // const editedAnimal = new Animal(animal);


}

module.exports = animalController;