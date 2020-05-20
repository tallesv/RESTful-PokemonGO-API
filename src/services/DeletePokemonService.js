const PokemonRepository = require('../repositories/PokemonRepository');

module.exports = {
  async execute(id) {
    const pokemonDeleted = await PokemonRepository.delete(id);

    return pokemonDeleted;
  }
}
