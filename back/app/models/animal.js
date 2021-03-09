class Animal {
    id;
    name;
    birthdate;
    description;

    //ATTENTION pour l'instant je sais pas si je garde avec undersocre ou pas, ça complique tout les setters
    creator_id;
    gender_id;
    // creatorId;
    // genderId;
    
    // medias = array of images
    // breeds = array of breeds
    // tags = array of tags
    // updates = array of user that provided updates

    /*
    setters :
    this.creator_id = 4
    will trigger :
    this.creator_id(4)
    which will have the effect :
    this.creatorId = 4
    */
    // set creator_id(val) {
    //     this.creatorId = val;
    // }
    // set gender_id(val) {
    //     this.genderId = val;
    // }


    constructor(data) {
        for (const prop in data) {
            this[prop] = data[prop];
        }
    }
}

module.exports = Animal;