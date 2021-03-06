const { response } = require('express');
const categoryMapper = require('../dataMappers/categoryMapper');

const categoryController = {
    allTags : async (_, response) => {
        console.log('enter categoryController.allCategories')
        const categories = await categoryMapper.findAll();
        response.json(categories)
    }
}

module.exports = categoryController;