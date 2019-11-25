const db = require('../../data/db-config.js');

const find = () => {
	return db('recipes')
}

const findById = id => {
	return db('recipes').where({ id });
};

const findStepsById = id => {
	return db('recipes as r')
		.select("r.id", "r.recipe_name", "s.step_number", 's.instructions')
		.innerJoin('steps as s', function(){
			this.on('r.id', '=', 's.recipe_id').andOn('r.id', "=", Number(id))
		})
		.orderBy('s.step_number')
};

const steps = id => {
	return db('recipes as r')
		.select("id")
		.innerJoin('steps as s', function(){
			this.on('r.id', '=', 's.recipe_id').andOn(
				's.recipe_id', '=', Number(id)
			);
		})
		.orderBy('s.recipe_id');
};


const add = recipe => {
	return db('recipes')
		.insert(recipe)
		.then( recipes => {
			return findById(recipes[0]);
		});
};

const update = (id, changes) => {
	return db('recipes')
		.where('id', id)
		.update(changes)
};

const remove = id => {
	return db('recipes')
		.where('id', id)
		.del();
};


module.exports = {
	find, findById, findStepsById, steps, add, update, remove
}
