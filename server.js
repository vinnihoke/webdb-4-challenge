const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');

const RecipeRouter = require('./routers/recipes/recipe-router.js');
const IngredientsRouter = require('./routers/ingredients/ingredient-router.js');

const server = express();

server.use(helmet())
server.use(morgan('dev'));
server.use(express.json());
server.use('/api/recipes', RecipeRouter);
server.use('/api/ingredients', IngredientsRouter);

module.exports = server