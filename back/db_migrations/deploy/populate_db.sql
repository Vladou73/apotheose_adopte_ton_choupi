-- Deploy spa:populate_db to pg

BEGIN;

INSERT INTO species ("name") VALUES ('chien'),('chat');
INSERT INTO breed ("name", species_id) VALUES 
    ('labrador',1),
    ('boxer',1),
    ('siamois',2),
    ('persan',2);

INSERT INTO tag ("name", color) VALUES 
    ('sos','#FF0000'),
    ('câlin','#0000FF'),
    ('joueur','#0000FF');

INSERT INTO gender ("name") VALUES ('male'),('female');

INSERT INTO "role" ("name") VALUES ('admin');

INSERT INTO "user" (firstname, lastname, username, email, "password", role_id) VALUES 
    ('Pika','Chu', 'Pikapika', 'pika@gmail.com', 'Sacha',1);

INSERT INTO animal ("name", birthdate, "description", creator_id, gender_id) VALUES 
    ('Choupi','2018-01-01', 'il est trop trop choupi', 1, 2),
    ('Léo','2017-01-01', 'Futé comme un furet', 1, 2),
    ('Simba','2010-01-01', 'attention carnivore', 1, 1),
    ('Persian','2010-01-01', 'câlinou le mimi', 1, 1);

INSERT INTO animal_tag (animal_id, tag_id) VALUES 
    (1,2),
    (1,1),
    (3,3),
    (4,2);

INSERT INTO animal_breed (animal_id, breed_id) VALUES 
    (1,1),
    (1,2),
    (2,2),
    (3,3),
    (4,4);

COMMIT;
