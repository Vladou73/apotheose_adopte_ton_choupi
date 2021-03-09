
species :

```json
[
    {
        "id":1,
        "name":"chien"
    },
    {
        "id":2,
        "name":"chat"
    },
    {
        "id":3,
        "name":"lapin"
    },
]
```

breeds : 

```json
[
    {
        "id":1,
        "name":"persan",
        "species_id":2
    },
    {
        "id":2,
        "name":"labrador",
        "species_id":1
    },
    {
        "id":3,
        "name":"fox-terrier",
        "species_id":1
    },
    {
        "id":4,
        "name":"choupachoups",
        "species_id":3
    },
]
```


ROUTE POST /addAnimal, format data à envoyer : 

```json
{
"name":"ffffff",
"birthdate":"01-01-1992",
"description":"un ptit choupi d'amour",
"creator_id":1,
"gender_id":2,
"tags":[{"id":1},{"id":2}],
"breeds":[{"id":1},{"id":2}],
"medias":[{"id":1},{"id":2}]
}
```
