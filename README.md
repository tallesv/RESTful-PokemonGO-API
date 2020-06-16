## Desafio Pokémon Go!

Sua missão é importar os dados do Pokemon Go, que estão no excel, e criar uma API usando NodeJS para que possamos consumir estes dados de maneira prática, rápida e automatizada.

Esta API deverá seguir o mínimo de práticas RESTful e conter listagens, busca, paginação e filtros. Fique à vontade para decidir quais filtros são mais interessantes.

## Tecnologias usadas

- <a href="https://nodejs.org/en/about/">NodeJS</a>
- <a href="https://www.mongodb.com/">MongoDB</a>
- <a href="https://expressjs.com/">Express</a>
- <a href="https://www.npmjs.com/package/convert-excel-to-json">convert-excel-to-json</a>

## Executando a api

Para executar a api é necessário executar o comando "yarn start".

## Rotas criadas

Atributos utilizados: "name", "id", "generation", "evolution_state", "evolved", "cross_gen", "type1", "type2", "weather1", "weather2, "stat_total", "atk", "def", "sta", "legendary", "aquireable", "spawns", "regional", "raidable", "hatchable, "shiny", "nest", "new", "not_gettable", "future_evolve, "cp40" e "cp39".

Obs: O id dos pokemons foi gerado a partir da coluna "Pokedex Number" no arquivo "Pokemon Go.xlsx" encontrado no diretório src/database.

# Create pokemon(post)
  rota: localhost:3333/pokemons/post

# Update pokemon(put)
  rota: localhost:3333/pokemons/put/:id

# Delete pokemon(delete)
  rota: localhost:3333/pokemons/delete/:id

# List all pokemons(get)
  rota: localhost:3333/pokemons

# Find pokemon(get)
  rota: localhost:3333/pokemons/:id

# Find pokemon by status(get)
  rota: localhost:3333/pokemons/ByStatus

  Para essa busca foi utilizado todos os atributos da entidade Pokemon, assim é possível fazer uma busca utilizando somente um atributo desejado, ou uma combinação deles.
  Obs: nos atributos "stat", "atk", "def", "sta", "cp39" e "cp40" a busca foi implementada de um modo a trazer valores maiores ou iguais do que o usuário passa.

  Exemplo:

    Resquest:

    {
	    "evolved": true,
	    "type1": "bug",
	    "weather1": "Rainy",
	    "atk": 180,
	    "def": 90,
	    "sta": 120,
	    "regional": false
    }

    Response:

      [
        {
          "_id": "5ee934d4f2b830182c280b34",
          "name": "Pinsir",
          "id": 127,
          "generation": 1,
          "evolution_state": "1",
          "evolved": true,
          "family_id": 63,
          "cross_gen": false,
          "type1": "bug",
          "weather1": "Rainy",
          "stat_total": 565,
          "atk": 238,
          "def": 197,
          "sta": 130,
          "legendary": 0,
          "aquireable": 1,
          "spawns": true,
          "regional": false,
          "raidable": 0,
          "hatchable": 5,
          "shiny": false,
          "nest": true,
          "new": false,
          "not_gettable": false,
          "future_evolve": false,
          "cp40": 2770,
          "cp39": 2730,
          "__v": 0
        },
        {
          "_id": "5ee934d4f2b830182c280b89",
          "name": "Scizor",
          "id": 212,
          "generation": 2,
          "evolution_state": "2",
          "evolved": true,
          "family_id": 59,
          "cross_gen": false,
          "type1": "bug",
          "type2": "steel",
          "weather1": "Rainy",
          "weather2": "Snow",
          "stat_total": 567,
          "atk": 236,
          "def": 191,
          "sta": 140,
          "legendary": 0,
          "aquireable": 1,
          "spawns": false,
          "regional": false,
          "raidable": 0,
          "hatchable": 0,
          "shiny": false,
          "nest": false,
          "new": false,
          "not_gettable": false,
          "future_evolve": false,
          "cp40": 2801,
          "cp39": 2761,
          "__v": 0
        },
        {
          "_id": "5ee934d4f2b830182c280bc0",
          "name": "Beautifly",
          "id": 267,
          "generation": 3,
          "evolution_state": "3",
          "evolved": true,
          "family_id": 136,
          "cross_gen": false,
          "type1": "bug",
          "type2": "flying",
          "weather1": "Rainy",
          "weather2": "Windy",
          "stat_total": 407,
          "atk": 189,
          "def": 98,
          "sta": 120,
          "legendary": 0,
          "aquireable": 1,
          "spawns": false,
          "regional": false,
          "raidable": 0,
          "hatchable": 0,
          "shiny": false,
          "nest": false,
          "new": false,
          "not_gettable": false,
          "future_evolve": false,
          "cp40": 1573,
          "cp39": 1551,
          "__v": 0
        }
      ]

