const { response } = require('express');
const animalMapper = require('../dataMappers/animalMapper');
const Animal = require('../models/animal');

// const Animal = require('../models/animal');

const animalController = {}

animalController.allAnimals = async (_, response) => {
    console.log('enter animalController.allAnimals')
    const animals = await animalMapper.findAll();
    response.json(animals)
}

animalController.oneAnimal = async (request, response) => {
    const animalId = request.params.id;
    try {
        const animal = await animalMapper.findOne(animalId);
        response.json(animal);
    } catch (err) { // Error thrown in data mapper gets here
        response.status(404).json(err.message);
    }
}

animalController.newAnimal = async (request, response) => {
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

module.exports = animalController;