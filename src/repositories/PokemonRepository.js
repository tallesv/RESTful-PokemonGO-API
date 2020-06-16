
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

  async getPokemonsByStatus(status) {
    const pokemons = await Pokemon.find({}).
      where('family_id').equals(status.family_id !== undefined ? status.family_id : { $ne: '' | null }).
      where('generation').equals(status.generationg ? status.generation : { $exists: true }).
      where('evolution_state').equals(status.evolution_state !== undefined ? status.evolution_state : { $ne: ''}).
      where('evolved').equals(status.evolved !== undefined ? status.evolved : { $exists: true }).
      where('cross_gen').equals(status.cross_gen ? status.cross_gen : { $exists: true }).
      where('type1').equals(status.type1 ? status.type1 : { $exists: true }).
      where('type2').equals(status.type2 ? status.type2 : { $ne: ''}).
      where('weather1').equals(status.weather1 ? status.weather1 : { $exists: true }).
      where('weather2').equals(status.weather2 ? status.weather2 : { $ne: ''}).
      where('stat_total').gt(status.stat_total - 1 ? status.stat_total : 0).
      where('atk').gt(status.atk ? status.atk - 1: 0).
      where('def').gt(status.def ? status.def - 1: 0).
      where('sta').gt(status.sta ? status.sta - 1: 0).
      where('legendary').equals(status.legendary !== undefined || status.legendary === 0 ? status.legendary : { $exists: true }).
      where('aquireable').equals(status.aquireable !== undefined || status.aquireable === 0 ? status.aquireable : { $exists: true }).
      where('spawns').equals(status.spawns !== undefined ? status.spawns : { $exists: true }).
      where('regional').equals(status.regional !== undefined ? status.regional : { $exists: true }).
      where('raidable').equals(status.raidable !== undefined || status.raidable === 0 ? status.raidable : { $exists: true }).
      where('hatchable').equals(status.hatchable !== undefined || status.hatchable === 0 ? status.hatchable : { $exists: true }).
      where('shiny').equals(status.shiny !== undefined ? status.shiny : { $exists: true }).
      where('nest').equals(status.nest !== undefined ? status.nest : { $exists: true }).
      where('new').equals(status.new !== undefined ? status.new : { $exists: true }).
      where('not_gettable').equals(status.not_gettable !== undefined ? status.not_gettable : { $exists: true }).
      where('future_evolve').equals(status.future_evolve !== undefined ? status.future_evolve : { $exists: true }).
      where('cp40').gt(status.cp40 ? status.cp40 - 1 : 0).
      where('cp39').gt(status.cp39 ? status.cp39 - 1 : 0);

    return pokemons;
  },

  async update(id, pokemon) {
    const updatedPokemon = await Pokemon.findOneAndUpdate(
      { id: id},
      this.parsePokemonToModel(pokemon)
    );

    return updatedPokemon;
  },

  async delete(id) {
    const pokemonToDelete = await Pokemon.findOneAndDelete({ id: id });

    return pokemonToDelete;
  },

  async save(pokemon) {

    const pokemonToCreate = new Pokemon(pokemon);

    const pokemonCreated = await pokemonToCreate.save();

    return pokemonCreated;
  },

  parsePokemonToModelAndSave(pokemon) {
    const pokemonModel = {
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
    this.save(pokemonModel);
  }
}
