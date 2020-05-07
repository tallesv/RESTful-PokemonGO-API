const express = require('express');
const pokemonsRouter = require('./pokemon.routes');

const routes = express.Router();

routes.use('/pokemons', pokemonsRouter);

module.exports = routes;
