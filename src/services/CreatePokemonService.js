const PokemonRepository = require('../repositories/PokemonRepository');

module.exports = {
  async execute(pokemon) {
    const pokemonCreated = await PokemonRepository.save(pokemon);

    return pokemonCreated;
  }
}
