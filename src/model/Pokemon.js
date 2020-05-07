const mongoose = require('mongoose');



const Pokemon = mongoose.Schema({

  id: {
    type: Number,
    require: true
  },

  name: String,

  img_id: Number,

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
})

module.exports = mongoose.model('pokemons', Pokemon);
