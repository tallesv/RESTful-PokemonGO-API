const PokemonRepository = require('../repositories/PokemonRepository');

module.exports = {
  async execute(id, pokemon) {
    const pokemonUpdate = await PokemonRepository.update(id, pokemon);

    return pokemonUpdate;
  }
}
