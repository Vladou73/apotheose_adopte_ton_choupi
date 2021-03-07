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

INSERT INTO category ("name", color) VALUES 
    ('adoption','#FF0000'),
    ('maltraitance','#0000FF'),
    ('actu','#0000FF'),
    ('covid','#0F00FF');

INSERT INTO gender ("name") VALUES ('male'),('female');

INSERT INTO "role" ("name") VALUES ('admin');

INSERT INTO "user" (firstname, lastname, username, email, "password", role_id) VALUES 
    ('Pika','Chu', 'Pikapika', 'pika@gmail.com', 'Sacha',1);

INSERT INTO media ("type", "url") VALUES 
    ('image', 'https://ibb.co/KwbM9CR'),
    ('image', 'https://ibb.co/g6nrwjW'),
    ('image', 'https://ibb.co/Nybv6W6');

INSERT INTO animal ("name", birthdate, "description", creator_id, gender_id) VALUES 
    ('Choupi','2018-01-01', 'il est trop trop choupi', 1, 2),
    ('Léo','2017-01-01', 'Futé comme un furet', 1, 2),
    ('Simba','2010-01-01', 'attention carnivore', 1, 1),
    ('Persian','2010-01-01', 'câlinou le mimi', 1, 1);

INSERT INTO article (title, content, author_id, category_id, media_id, pin) VALUES
    ('titre 1', 'Lorem ipsum dolor Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris', 1, 1, 3, true),
    ('titre 2', 'Lorem ipsum dolor Ut enim ad minim veniam, ', 1, 2, 3, false),
    ('titre 3', 'quis nostrud exercitation ullamco laboris', 1, 3, 2, false);


INSERT INTO animal_media (animal_id, media_id) VALUES 
    (1,2),
    (1,1),
    (2,1),
    (3,1),
    (4,2);

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
