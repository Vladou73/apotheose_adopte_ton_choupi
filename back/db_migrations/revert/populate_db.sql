-- Revert spa:populate_db from pg

BEGIN;

TRUNCATE species CASCADE;
TRUNCATE breed CASCADE;
TRUNCATE tag CASCADE;
TRUNCATE gender CASCADE;
TRUNCATE "role" CASCADE;
TRUNCATE "user" CASCADE;
TRUNCATE animal CASCADE;
TRUNCATE animal_tag CASCADE;
TRUNCATE animal_breed CASCADE;

COMMIT;
