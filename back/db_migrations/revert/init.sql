-- Revert spa:init from pg

BEGIN;

DROP TABLE article;
DROP TABLE "user";
DROP TABLE "role";
DROP TABLE media;
DROP TABLE tag;
DROP TABLE category;
DROP TABLE species;
DROP TABLE breed;
DROP TABLE gender;
DROP TABLE animal;

COMMIT;
