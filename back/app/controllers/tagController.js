const { response } = require('express');
const tagMapper = require('../dataMappers/tagMapper');

const tagController = {
    allTags : async (_, response) => {
        console.log('enter tagController.allTags')
        const tags = await tagMapper.findAll();
        response.json(tags)
    }
}

module.exports = tagController;