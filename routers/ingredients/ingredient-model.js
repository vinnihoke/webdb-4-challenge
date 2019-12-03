const db = require('../../data/db-config.js');

const find = () => {
	return db('ingredients')
}

const findById = id => {
	return db('ingredients').where({ id });
};

const ingredients = id => {
	return db('recipes as r')
		.select("id")
		.innerJoin('recipe_ingredients as ri', function(){
			this.on('r.id', '=', 'ri.recipe_id').andOn(
				'ri.recipe_id', '=', Number(id)
			);
		})
		.orderBy('ri.recipe_id', "ri.ingredient_id");
};

module.exports = {
	find, findById, ingredients
};