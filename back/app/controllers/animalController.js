const { response } = require('express');
const animalMapper = require('../dataMappers/animalMapper');

// const Animal = require('../models/animal');

const animalController = {}

animalController.allAnimals = async (_, response) => {
    const animals = await animalMapper.findAll();
    response.json(animals)
}


module.exports = animalController;