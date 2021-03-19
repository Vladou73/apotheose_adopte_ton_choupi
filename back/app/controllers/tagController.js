const { response } = require('express');
const tagMapper = require('../dataMappers/tagMapper');
const Tag = require('../models/tag');

const tagController = {}

tagController.allTags = async (_, response, next) => {
    console.log('enter tagController.allTags')
    try{
        const tags = await tagMapper.findAll();
        response.json(tags)
    }catch(error){
        next(error)
    }
}

tagController.oneTag = async (request, response, next) => {
    console.log('enter tagController.oneTag')
    try {
        const tag = await tagMapper.findOne(request.params.id);
        response.json(tag);
    } catch (error) { // Error thrown in data mapper gets here
        next(error)
    }
}

tagController.newTag = async (request, response, next) => {
    console.log('enter tagController.newTag')
    // create instance of tag directly from data sent through payload
    const newTag = new Tag(request.body);
    
    try {
        await tagMapper.save(newTag);
        response.json(newTag);
    } catch (error) {
        next(error)
    }
}

tagController.deleteTag = async(request, response, next)=> {
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
    } catch (error) { // Error thrown in data mapper gets here
        next(error)
    }
}

tagController.editTag = async(request, response, next)=> {
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
    } catch (error) { // Error thrown in data mapper gets here
        next(error)
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
    } catch (error) { // Error thrown in data mapper gets here
        next(error)
    }


    //WIP  ==> TO DO LATER
    //create new Tag instance with all the data
    // const editedtag = new Tag(tag);
}

module.exports = tagController;