-- Revert spa:populate_db from pg

BEGIN;

TRUNCATE species CASCADE;
TRUNCATE breed CASCADE;
TRUNCATE tag CASCADE;
TRUNCATE gender CASCADE;

COMMIT;
