-- Revert spa:init from pg

BEGIN;

DROP TABLE
    article,
    "user",
    "role",
    media,
    tag,
    category,
    species,
    breed,
    gender,
    animal,
    animal_media,
    animal_breed,
    animal_tag,
    article_edition,
    animal_edition
CASCADE ;

COMMIT;

