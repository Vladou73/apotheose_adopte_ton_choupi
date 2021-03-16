const { response } = require('express');
const tagMapper = require('../dataMappers/tagMapper');
const Tag = require('../models/tag');

const tagController = {}

tagController.allTags = async (_, response) => {
    console.log('enter tagController.allTags')
    const tags = await tagMapper.findAll();
    response.json(tags)
}

tagController.oneTag = async (request, response) => {
    console.log('enter tagController.oneTag')
    try {
        const tag = await tagMapper.findOne(request.params.id);
        response.json(tag);
    } catch (err) { // Error thrown in data mapper gets here
        response.status(404).json(err.message);
    }
}

tagController.newTag = async (request, response) => {
    console.log('enter tagController.newTag')
    // create instance of tag directly from data sent through payload
    const newTag = new Tag(request.body);
    
    try {
        await tagMapper.save(newTag);
        response.json(newTag);
    } catch (err) {
        response.status(403).json(err.message);
    }
}

tagController.deleteTag = async(request, response)=> {
    console.log('enter tagController.deleteTag')
    const tagId = Number(request.params.id);
    if (isNaN(tagId)) {
        return response.status(400).json({
            error: `the provided id must be a number`
        });
    }
    try {
        const tag = await tagMapper.deleteOne(tagId);
        response.json(tag);
    } catch (err) { // Error thrown in data mapper gets here
        response.status(404).json(err.message);
    }
}

tagController.editTag = async(request, response)=> {
    console.log('enter tagController.editTag')
    const tagId = Number(request.params.id);
    if (isNaN(tagId)) {
        return response.status(400).json({
            error: `the provided id must be a number`
        });
    }

    //get the tag data from DB
    let tag = {}
    try {
        tag = await tagMapper.findOne(tagId);
    } catch (err) { // Error thrown in data mapper gets here
        response.status(404).json(err.message);
    }

    //Check to keep only properties accepted from client side
    const acceptedProperties = ['name','color']
    for (prop in request.body){
            //change to tag properties the updated values
        if (acceptedProperties.includes(prop)){
            tag[prop] = request.body[prop];
        };
    }
    
    // update DB with tag edited properties
    try {
        await tagMapper.edit(tag);
        response.json(tag);
    } catch (err) { // Error thrown in data mapper gets here
        response.status(404).json(err.message);
    }


    //WIP  ==> TO DO LATER
    //create new Tag instance with all the data
    // const editedtag = new Tag(tag);
}

module.exports = tagController;