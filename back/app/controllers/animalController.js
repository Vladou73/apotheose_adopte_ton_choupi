const { response } = require('express');
const animalMapper = require('../dataMappers/animalMapper');
const Animal = require('../models/animal');
const animalService = require('../services/animalService');
const mediaMapper = require('../dataMappers/mediaMapper');

const animalController = {}

animalController.allAnimals = async (request, response, next) => {
    console.log('enter animalController.allAnimals')
    try {
        // request paramter is used for pagination : limit & offset
        const animals = await animalMapper.findAll(request);

        //add animal age and age category
        animalsResult = animalService.addAgeLabels(animals);
        response.json(animalsResult);
    } catch(error) {
        next(error);
    }
}

animalController.oneAnimal = async (request, response, next) => {
    console.log('enter animalController.oneAnimal')
    const animalId = request.params.id;
    try {
        const animal = await animalMapper.findOne(animalId);
        response.json(animal);
    } catch (error) { // Error thrown in data mapper gets here
        next(error);
    }
}

animalController.newAnimal = async (request, response, next) => {
    console.log('enter animalController.newAnimal')
    
    //check if new medias have to be added to the DB ie check if client sends new urls in medias objects
    if (request.body['medias']) { // check if medias change have been asked
        for (media of request.body['medias']) { 
            if (media.url){//check for all media if it a new media (ie if an url is sent)
                try {
                    await mediaMapper.save(media); //call mapper to save new media. Save/add the new media id in the request.body object
                } catch(error){
                    next(error);
                }
            }
        }
    }

    // on crée directement notre model à partir des données envoyées dans le payload
    const newAnimal = new Animal(request.body);
    // console.log('request.body',request.body);
    
    try {
        await animalMapper.save(newAnimal);
        response.json(newAnimal);
    } catch (error) {
        next(error);
    }
    console.log('newAnimal',newAnimal);
}

animalController.deleteAnimal = async (request, response, next)=>{
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
    } catch (error) { // Error thrown in data mapper gets here
        next(error);
    }
}

animalController.editAnimal = async (request, response, next)=>{
    try {
        console.log('enter animalController.editAnimal')
        const animalId = Number(request.params.id);
        if (isNaN(animalId)) {
            return response.status(400).json({
                error: `the provided id must be a number`
            });
        }

        //get the animal data from DB
        let animal = {}
        animal = await animalMapper.findOne(animalId);

        //check that the date format is the right one, else change it
        console.log('animal.birthdate', animal.birthdate);
        let parts = animal.birthdate.split('-');
        //check if first part is year or day. If date starts with date, change string format to start with year
        if(parts[0].length=2) {
            console.log('change date format')
            animal.birthdate = `${parts[2]}-${parts[1]}-${parts[0]}` 
        }
        console.log('new animal.birthdate', animal.birthdate);


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
        await animalMapper.edit(animal, otherTablesImpacted);
        response.json(animal);
        
    } catch (error) { // Error thrown in data mapper gets here
        next(error);
    }

    //WIP  ==> TO DO LATER
    //create new animal instance with all the data
    // const editedAnimal = new Animal(animal);


}

module.exports = animalController;