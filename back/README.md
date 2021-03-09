Technos utilisées

BDD

- Postgres
- snap pour heroku https://codeburst.io/how-to-install-and-use-snap-on-ubuntu-18-04-9fcb6e3b34f9
- heroku : https://dashboard.heroku.com/apps


Authentification
  - JWT 
  - library jsonwebtoken : https://www.npmjs.com/package/jsonwebtoken


traitement à faire en JS pour calculer
animals = [{}, {}, {}]
animals.forEach( animal => {
    animal.age = retrieveAgeFromBirthdate(animal.birthdate)
    animal.age_label = attributeAgeLabel(animal.age)
});