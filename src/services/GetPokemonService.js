const PokemonRepository = require('../repositories/PokemonRepository');

module.exports = {
  async getAllPokemons() {
    const pokemons = await PokemonRepository.getAllPokemons();

    return pokemons;
  },

  async getPokemonById(id) {
    const pokemon = await PokemonRepository.findById(id);

    return pokemon;
  },

  async getPokemonsByStats(stats) {
    const pokemons = await PokemonRepository.getPokemonsByStatus(stats);

    return pokemons;
  }
}
