-- Deploy spa:init to pg

BEGIN;

CREATE TABLE species (
    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" text NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMPTZ
);

CREATE TABLE breed (
    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" text NOT NULL,
    species_id int NOT NULL REFERENCES species(id),
    created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMPTZ
);

CREATE TABLE tag (
    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" text NOT NULL,
    color text NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMPTZ
);

CREATE TABLE gender (
    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" text NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMPTZ
);

CREATE TABLE media (
    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "type" text NOT NULL,
    "url" text NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMPTZ
);

CREATE TABLE "role" (
    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" text NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMPTZ
);

CREATE TABLE "user" (
    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    firstname text NOT NULL,
    lastname text NOT NULL,
    username text NOT NULL UNIQUE,
    email text NOT NULL UNIQUE,
    "password" text NOT NULL,
    role_id int NOT NULL REFERENCES role(id),
    image_id int REFERENCES media(id),
    created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMPTZ
);

CREATE TABLE animal (
    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" text NOT NULL,
    birthdate date NOT NULL,
    "description" text NOT NULL,
    creator_id int NOT NULL REFERENCES "user"(id),
    gender_id int NOT NULL REFERENCES gender(id),
    created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE category (
    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" text NOT NULL,
    color text NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMPTZ
);

CREATE TABLE article (
    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    title text NOT NULL UNIQUE,
    content text NOT NULL,
    pin boolean NOT NULL DEFAULT false,
    author_id int NOT NULL REFERENCES "user"(id),
    category_id int NOT NULL REFERENCES category(id),
    media_id int REFERENCES media(id),
    created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE animal_edition (
    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    animal_id int NOT NULL REFERENCES animal(id),
    user_id int NOT NULL REFERENCES "user"(id),
    created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE article_edition (
    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    article_id int NOT NULL REFERENCES article(id),
    user_id int NOT NULL REFERENCES "user"(id),
    created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE animal_tag (
    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    animal_id int NOT NULL REFERENCES animal(id),
    tag_id int NOT NULL REFERENCES tag(id),
    created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE animal_breed (
    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    animal_id int NOT NULL REFERENCES animal(id),
    breed_id int NOT NULL REFERENCES breed(id),
    created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE animal_media (
    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    animal_id int NOT NULL REFERENCES animal(id),
    media_id int NOT NULL REFERENCES media(id),
    created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);

COMMIT;
