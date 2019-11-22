
exports.seed = function(knex) {
	return knex('ingredients').insert([
		{ ingredient_name: "Mallows" },
		{ ingredient_name: "Chocolate" },
		{ ingredient_name: "Grahams" },
		{ ingredient_name: "Car" },
		{ ingredient_name: "Parents" }
	]);
};
