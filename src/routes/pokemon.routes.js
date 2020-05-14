const express = require('express');

const Pokemon = require('../model/Pokemon');
const PokemonController = require('../controllers/PokemonController');

const pokemonsRouter = express.Router();

pokemonsRouter.get('/', async (request, response) => {
  try {
    const pokemons = await Pokemon.find();
    return response.json(pokemons);
  } catch (err) {
    return response.json({ message: err});
  }
});

pokemonsRouter.post('/post', PokemonController.create);

pokemonsRouter.put('/put/:id', PokemonController.update);

pokemonsRouter.delete('/delete/:id', async (request, response) => {
  const pokemonId = request.params.id;

  try {
    const deletedPokemon = await Pokemon.findOneAndDelete({ id: pokemonId});
    return response.json(deletedPokemon);
  } catch (err) {
    return response.json({ message: err });
  }

})

module.exports = pokemonsRouter;
