const CreatePokemonService = require('../services/CreatePokemonService');
const UpdatePokemonService = require('../services/UpdatePokemonService');
const GetPokemonService = require('../services/GetPokemonService');
const DeletePokemonService = require('../services/DeletePokemonService');

module.exports = {
  async create(request, response) {
    const pokemon = request.body;
    try {

      const pokemonCreated = await CreatePokemonService.execute(pokemon);

      return response.json(pokemonCreated);
    } catch (err) {
      return response.json({ message: err });
    }
  },

  async update(request, response) {
    const pokemonId = request.params.id;
    const pokemonToUpdate = request.body;

    try {
      const updatedPokemon = await UpdatePokemonService.execute(pokemonId, pokemonToUpdate);
      return response.json(updatedPokemon);
    }   catch (err) {
      return response.json({ message: err });
    }
  },

  async get (request, response) {
    try {
      const pokemons = await GetPokemonService.getAllPokemons();
      return response.json(pokemons);
    }   catch (err) {
      return response.json({ message: err });
    }
  },

  async getById (request, response) {
    const { id } = request.params;

    try {
      const pokemon = await GetPokemonService.getPokemonById(id);
      return response.json(pokemon);
    }   catch (err) {
      return response.json({ message: err });
    }
  },

  async getByStats (request, response) {
    const stats = request.body;

    try{
      const pokemons = await GetPokemonService.getPokemonsByStats(stats);

      return response.json(pokemons);
    } catch (err) {
      return response.json({ message: err });
    }
  },

  async delete (request, response) {
    const { id } = request.params;

    try {
      const pokemonDeleted = await DeletePokemonService.execute(id);
      return response.json(pokemonDeleted);
    }   catch (err) {
      return response.json({ message: err });
    }
  }
}
