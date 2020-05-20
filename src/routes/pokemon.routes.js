const express = require('express');

const Pokemon = require('../model/Pokemon');
const PokemonController = require('../controllers/PokemonController');

const pokemonsRouter = express.Router();

pokemonsRouter.get('/', PokemonController.get);

pokemonsRouter.get('/:id', PokemonController.getById);

pokemonsRouter.post('/post', PokemonController.create);

pokemonsRouter.put('/put/:id', PokemonController.update);

pokemonsRouter.delete('/delete/:id', PokemonController.delete);

module.exports = pokemonsRouter;
