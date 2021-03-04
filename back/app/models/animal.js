class Animal {
    id;
    name;
    birthdate;
    description;
    creatorId;
    genderId;
    // medias = array of images
    // breeds = array of breeds
    // tags = array of tags
    // updates = array of user that provided updates

    constructor(data) {
        for (const prop in data) {
            this[prop] = data[prop];
        }
    }
}

module.exports = Animal;