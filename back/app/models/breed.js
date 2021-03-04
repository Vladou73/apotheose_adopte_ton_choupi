class Breed {
    id;
    name;
    speciesId;

    constructor(data) {
        for (const prop in data) {
            this[prop] = data[prop];
        }
    }
}

module.exports = Breed;