exports.seed = function(knex) {
	return knex('recipe_ingredients').insert([
		{ recipe_id: 1, ingredient_id: 1, quantity: 1, measurement: "Unit" },
		{ recipe_id: 1, ingredient_id: 2, quantity: 1, measurement: "Unit" },
		{ recipe_id: 1, ingredient_id: 3, quantity: 1, measurement: "Unit/Halved" },
		{ recipe_id: 2, ingredient_id: 4, quantity: 1, measurement: "Unit" },
		{ recipe_id: 2, ingredient_id: 5, quantity: 2, measurement: "Unit" },
	]);
};