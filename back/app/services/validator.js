const validate = (schema, requestPart) => (request, response, next) => {
    console.log('entering validator service');
    // check req.body or req.query and validate it with Join schema
    const { error } = schema.validate(request[requestPart]);

    if (error) {
        response.status(400).json(error.message);
    } else {
        next();
    }
};

module.exports = validate;