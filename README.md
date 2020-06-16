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

Campos utilizados: "name", "id", "generation", "evolution_state", "evolved", "cross_gen", "type1", "type2", "weather1", "weather2, "stat_total", "atk", "def", "sta", "legendary", "aquireable", "spawns", "regional", "raidable", "hatchable, "shiny", "nest", "new", "not_gettable", "future_evolve, "cp40" e "cp39".

Obs: O id dos pokemons foi gerado a partir da coluna "Pokedex Number" no arquivo "Pokemon Go.xlsx" encontrado no diretório src/database.

- Create pokemon(post)
  rota: localhost:3333/pokemons/post

-Update pokemon(put)
  rota: localhost:3333/pokemons/put/:id

- Delete pokemon(delete)
  rota: localhost:3333/pokemons/delete/:id

- List all pokemons(get)
  rota: localhost:3333/pokemons

- Find pokemon(get)
  rota: localhost:3333/pokemons/:id

-Find pokemon by status(get)
 
  
  rota: localhost:3333/pokemons/ByStatus
