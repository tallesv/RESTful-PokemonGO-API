const excelToJson = require('convert-excel-to-json');
const path = require('path');

const Pokemon = require('../model/Pokemon');
const pokemonRepository = require('../repositories/PokemonRepository');

async function populateDatabase() {
  try {

    const pokemonsFromFile = await excelToJson({
      sourceFile: path.join(__dirname, 'Pokemon Go.xlsx'),
      header: { rows: 1},
      columnToKey: {
        '*': '{{columnHeader}}'
      }
    });

    const pokemons = pokemonsFromFile['Sheet1'];

    pokemons.map(pokemon => pokemonRepository.parsePokemonToModelAndSave(pokemon));
  } catch (err) {
    console.log(err);
  }
}

module.exports = populateDatabase;
