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
    ('câlin','#0000FF');

INSERT INTO gender ("name") VALUES ('male'),('female');


COMMIT;
