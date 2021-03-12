const { response } = require('express');
const userService = require('../services/userService');

userController = {
    signIn: (request, response, next) => {
        console.log('entered userController.signIn');
        console.log('request.body ',request.body)
        userService.signIn(request.body)
            .then((user) => {
                response.cookie('token', user.token, { httpOnly: true });
                response.json(user);
            })
            .catch(next);
    },
    authenticate : (request, response, next) => {
        console.log('entered userController.authenticate');
        console.log('request.headers ',request.headers);
        console.log('request.body ',request.body);
        userService.authenticate(request.headers)
            .then(next())
            // .then(decoded => response.json(decoded))
            .catch(next);
        // next();
    }
}

module.exports = userController;
