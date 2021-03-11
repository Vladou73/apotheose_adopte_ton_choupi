class Article {
    id;
    title;
    content;
    pin;
    author_id;
    category_id;
    media_id;

    constructor(data) {
        for (const prop in data) {
            this[prop] = data[prop];
        }
    }
}

module.exports = Article;