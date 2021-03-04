const { response } = require('express');
const animalMapper = require('../dataMappers/animalMapper');

// const Animal = require('../models/animal');

const animalController = {}

animalController.allAnimals = async (_, response) => {
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

module.exports = animalController;