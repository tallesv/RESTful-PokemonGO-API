const mongoose = require('mongoose');



const Pokemon = mongoose.Schema({

  name: String,
  id: {
    type: Number,
    require: true
  },
  generation: Number,
  evolution_state: String,
  evolved: Boolean,
  family_id: Number,
  cross_gen: Boolean,
  type1: String,
  type2: String,
  weather1: String,
  weather2: String,
  stat_total: Number,
  atk: Number,
  def: Number,
  stat: Number,
  legendary: Number,
  aquireable: Number,
  spawns: Boolean,
  regional: Boolean,
  raidable: Number,
  hatchable: Number,
  shiny: Boolean,
  nest: Boolean,
  new: Boolean,
  not_gettable: Boolean,
  future_evolve: Boolean,
  cp40: Number,
  cp39: Number
})

module.exports = mongoose.model('pokemons', Pokemon);
