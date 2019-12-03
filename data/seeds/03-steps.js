
exports.seed = function(knex) {
	return knex('steps').insert([
		{ step_number: 1, instructions: "Roast the mallow", recipe_id: 1 },
		{ step_number: 2, instructions: "Place the mallow on chocolate", recipe_id: 1 },
		{ step_number: 3, instructions: "Cover the mallow", recipe_id: 1 },
		{ step_number: 4, instructions: "Feast", recipe_id: 1 },
		{ step_number: 1, instructions: "Call parents", recipe_id: 2 },
		{ step_number: 2, instructions: "Drive to parents house", recipe_id: 2 },
		{ step_number: 3, instructions: "Feast", recipe_id: 2 },
	]);
};
