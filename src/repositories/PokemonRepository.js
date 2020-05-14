
const Pokemon = require('../model/Pokemon');


module.exports = {

  async findById(id) {
    const pokemon = await Pokemon.find({ id: id });

    return pokemon;
  },

  async getAllPokemons() {
    const pokemons = await Pokemon.find();

    return pokemons;
  },

  async update(id, pokemon) {
    const updatedPokemon = await Pokemon.findOneAndUpdate(
      { id: id},
      this.parsePokemonToModel(pokemon)
    );

    return updatedPokemon;
  },

  async save(pokemon) {
    const pokemonData = this.parsePokemonToModel(pokemon);

    const pokemonToCreate = new Pokemon(pokemonData);

    const pokemonCreated = await pokemonToCreate.save();

    return pokemonCreated;
  },

  parsePokemonToModel(pokemon) {
    return pokemonModel = {
      name: pokemon['Name'],
      id: pokemon['Pokedex Number'],
      generation: pokemon['Generation'],
      evolution_state: pokemon['Evolution Stage'],
      evolved: pokemon['Evolved'],
      family_id: pokemon['FamilyID'],
      cross_gen: pokemon['Cross Gen'],
      type1: pokemon['Type 1'],
      type2: pokemon['Type 2'],
      weather1: pokemon['Weather 1'],
      weather2: pokemon['Weather 2'],
      stat_total: pokemon['STAT TOTAL'],
      atk: pokemon['ATK'],
      def: pokemon['DEF'],
      sta: pokemon['STA'],
      legendary: pokemon['Legendary'],
      aquireable: pokemon['Aquireable'],
      spawns: pokemon['Spawns'],
      regional: pokemon['Regional'],
      raidable: pokemon['Raidable'],
      hatchable: pokemon['Hatchable'],
      shiny: pokemon['Shiny'],
      nest: pokemon['Nest'],
      new: pokemon['New'],
      not_gettable: pokemon['Not-Gettable'],
      future_evolve: pokemon['Future Evolve'],
      cp40: pokemon['100% CP @ 40'],
      cp39: pokemon['100% CP @ 39']
    }
  }

}
