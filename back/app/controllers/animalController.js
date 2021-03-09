const { response } = require('express');
const animalMapper = require('../dataMappers/animalMapper');
const Animal = require('../models/animal');
const animalService = require('../services/animalService');

// const Animal = require('../models/animal');

const animalController = {}

animalController.allAnimals = async (_, response) => {
    console.log('enter animalController.allAnimals')
    const animals = await animalMapper.findAll();

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
    // on crée directement notre model à partir des données envoyées dans le payload
    const newAnimal = new Animal(request.body);
    // console.log('request.body',request.body);
    
    // response.json(newAnimal)
    
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

module.exports = animalController;