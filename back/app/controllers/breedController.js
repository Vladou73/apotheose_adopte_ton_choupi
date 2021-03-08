const { response } = require('express');
const breedMapper = require('../dataMappers/breedMapper');

const breedController = {
    allBreeds : async (_, response) => {
        console.log('enter breedController.allbreeds')
        const breeds = await breedMapper.findAll();
        response.json(breeds)
    }
}

module.exports = breedController;