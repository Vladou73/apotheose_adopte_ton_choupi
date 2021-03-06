const { response } = require('express');
const speciesMapper = require('../dataMappers/speciesMapper');

const speciesController = {
    allSpecies : async (_, response) => {
        console.log('enter speciesController.allSpecies')
        const species = await speciesMapper.findAll();
        response.json(species)
    }
}

module.exports = speciesController;