
exports.seed = function(knex) {
	return knex('recipes').insert([
		{ recipe_name: "Smores" },
		{ recipe_name: "Free Dinner" },
	]);
};
