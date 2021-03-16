const { response } = require('express');
const categoryMapper = require('../dataMappers/categoryMapper');
const Category = require('../models/category');

const categoryController = {}

categoryController.allCategories = async (_, response) => {
    console.log('enter categoryController.allCategories')
    const categories = await categoryMapper.findAll();
    response.json(categories)
}

categoryController.oneCategory = async (request, response) => {
    console.log('enter categoryController.oneCategory')
    try {
        const category = await categoryMapper.findOne(request.params.id);
        response.json(category);
    } catch (err) { // Error thrown in data mapper gets here
        response.status(404).json(err.message);
    }
}

categoryController.newCategory = async (request, response) => {
    console.log('enter categoryController.newCategory')
    // create instance of category directly from data sent through payload
    const newCategory = new Category(request.body);
    
    try {
        await categoryMapper.save(newCategory);
        response.json(newCategory);
    } catch (err) {
        response.status(403).json(err.message);
    }
}

categoryController.deleteCategory = async(request, response)=> {
    console.log('enter categoryController.deleteCategory')
    const categoryId = Number(request.params.id);
    if (isNaN(categoryId)) {
        return response.status(400).json({
            error: `the provided id must be a number`
        });
    }
    try {
        const category = await categoryMapper.deleteOne(categoryId);
        response.json(category);
    } catch (err) { // Error thrown in data mapper gets here
        response.status(404).json(err.message);
    }
}

categoryController.editCategory = async(request, response)=> {
    console.log('enter categoryController.editCategory')
    const categoryId = Number(request.params.id);
    if (isNaN(categoryId)) {
        return response.status(400).json({
            error: `the provided id must be a number`
        });
    }

    //get the category data from DB
    let category = {}
    try {
        category = await categoryMapper.findOne(categoryId);
    } catch (err) { // Error thrown in data mapper gets here
        response.status(404).json(err.message);
    }

    //Check to keep only properties accepted from client side
    const acceptedProperties = ['name','color']
    for (prop in request.body){
            //change to category properties the updated values
        if (acceptedProperties.includes(prop)){
            category[prop] = request.body[prop];
        };
    }
    
    // update DB with category edited properties
    try {
        await categoryMapper.edit(category);
        response.json(category);
    } catch (err) { // Error thrown in data mapper gets here
        response.status(404).json(err.message);
    }


    //WIP  ==> TO DO LATER
    //create new Category instance with all the data
    // const editedcategory = new Category(category);
}

module.exports = categoryController;



