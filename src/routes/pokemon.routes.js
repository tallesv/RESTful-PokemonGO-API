const express = require('express');
const readXlsFile = require('read-excel-file/node');

const Pokemon = require('../model/Pokemon');

const pokemonsRouter = express.Router();

pokemonsRouter.get('/', async (request, response) => {
  try {
    const pokemons = await Pokemon.find();
    return response.json(pokemons);
  } catch (err) {
    return response.json({ message: err});
  }
});

pokemonsRouter.post('/post', async (request, response) => {
  const pokemon = new Pokemon(request.body);

  try {
    const savedPokemon = await pokemon.save()
    return response.json( savedPokemon);
  } catch (err) {
    return response.json({ message: err });
  }
})

pokemonsRouter.put('/put', (request, response) => {


})

pokemonsRouter.delete('/delete/:id', async (request, response) => {
  const { id } = request.params;
  const pokemonId = id;
  try {
    const deletedPokemon = await Pokemon.findOneAndDelete({ id: pokemonId});
    console.log(pokemonId);
    return response.json(deletedPokemon);
  } catch (err) {
    return response.json({ message: err });
  }

})

module.exports = pokemonsRouter;
