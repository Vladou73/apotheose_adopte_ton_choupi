const { response } = require('express');
const articleMapper = require('../dataMappers/articleMapper');
const Article = require('../models/article');
const mediaMapper = require('../dataMappers/mediaMapper');


const articleController = {}

articleController.allArticles = async (request, response) => {
    console.log('enter articleController.allArticles');
    // request paramter is used for pagination : limit & offset
    const articles = await articleMapper.findAll(request);
    response.json(articles)
}

articleController.oneArticle = async (request, response) => {
    console.log('enter articleController.oneArticle')
    try {
        const article = await articleMapper.findOne(request.params.id);
        response.json(article);
    } catch (err) { // Error thrown in data mapper gets here
        response.status(404).json(err.message);
    }
}

articleController.newArticle = async (request, response) => {
    console.log('enter articleController.newArticle')

    //check if a new media has to be added to the DB ie check if client sends a new url rather than a media id
    if (request.body.media_id && request.body.media_url){ //If properties media_id and media_url are both in req.body, throws error
        return response.status(400).json({
            error: `forbidden : you cannot provide media_id and media_url fields in the same query.
             Choose either media_id to add already existing media or media_url to add new media to DB`
        });
    } else if (request.body.media_url){ //new media has to be added to DB
        let media = {
            'url':request.body.media_url,
            'type':'image'
        }
        //call mapper to save new media.
        await mediaMapper.save(media);
        //Save/add the newly created media id in the request.body object
        request.body.media_id = media.id;
    }
    
    // create instance of Article directly from data sent through payload
    const newArticle = new Article(request.body);
    try {
        await articleMapper.save(newArticle);
        response.json(newArticle);
    } catch (err) {
        response.status(403).json(err.message);
    }
}

articleController.deleteArticle = async(request, response)=> {
    console.log('enter articleController.deleteArticle')
    const articleId = Number(request.params.id);
    if (isNaN(articleId)) {
        return response.status(400).json({
            error: `the provided id must be a number`
        });
    }
    try {
        const article = await articleMapper.deleteOne(articleId);
        response.json(article);
    } catch (err) { // Error thrown in data mapper gets here
        response.status(404).json(err.message);
    }
}



articleController.editArticle = async(request, response)=> {
    console.log('enter articleController.editArticle')
    const articleId = Number(request.params.id);
    if (isNaN(articleId)) {
        return response.status(400).json({
            error: `the provided id must be a number`
        });
    }

    //get the article data from DB
    let article = {}
    try {
        article = await articleMapper.findOne(articleId);
    } catch (err) { // Error thrown in data mapper gets here
        response.status(404).json(err.message);
    }

    //check if a new media has to be added to the DB ie check if client sends a new url rather than a media id
    if (request.body.media_id && request.body.media_url){ //If properties media_id and media_url are both in req.body, throws error
        return response.status(400).json({
            error: `forbidden : you cannot provide media_id and media_url fields in the same query.
             Choose either media_id to add already existing media or media_url to add new media to DB`
        });
    } else if (request.body.media_url){ //new media has to be added to DB
        let media = {
            'url':request.body.media_url,
            'type':'image'
        }
        //call mapper to save new media.
        await mediaMapper.save(media);
        //Save/add the newly created media id in the request.body object
        request.body.media_id = media.id;
    }

    //Check to keep only properties accepted from client side
    const acceptedProperties = ['title','content','pin','category_id','media_id','media_url']
    for (prop in request.body){
            //change to article properties the updated values
        if (acceptedProperties.includes(prop)){
            article[prop] = request.body[prop];
        };
    }
    
    // update DB with article edited properties
    try {
        await articleMapper.edit(article);
        response.json(article);
    } catch (err) { // Error thrown in data mapper gets here
        response.status(404).json(err.message);
    }


    //WIP  ==> TO DO LATER
    //create new article instance with all the data
    // const editedArticle = new Article(article);



}

module.exports = articleController;