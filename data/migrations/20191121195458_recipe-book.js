
exports.up = function(knex) {
  return (
	  knex.schema
	  .createTable('recipes', table => {
		  table.increments();
		  table.string('recipe_name', 255).notNullable().unique();
	  })
	  .createTable('steps', table => {
		  table.increments();
		  table.integer('step_number').notNullable()
		  table.string('instructions').notNullable()
		  table.integer('recipe_id')
			  .unsigned()
			  .notNullable()
			  .references('recipes.id')
			  .onDelete('CASCADE')
			  .onUpdate('CASCADE')
	  })
	  .createTable('ingredients', table => {
		  table.increments();
		  table.string('ingredient_name', 255).notNullable().unique();
	  })
	  .createTable('recipe_ingredients', table => {
		  table.primary(["recipe_id", "ingredient_id"])
		  table.integer('recipe_id')
			  .unsigned()
			  .notNullable()
			  .references('recipes.id')
			  .onDelete('CASCADE')
			  .onUpdate('CASCADE')
		  table.integer('ingredient_id')
			  .unsigned()
			  .notNullable()
			  .references('ingredients.id')
			  .onDelete('CASCADE')
			  .onUpdate('CASCADE')
			table.float('quantity', 3).notNullable()
			table.string('measurement', 255).notNullable()	
	  })

  )
};

exports.down = function(knex) {
  return(
	  knex.schema
	  	.dropTableIfExists('recipe_ingredients')
	  	.dropTableIfExists('ingredients')
	  	.dropTableIfExists('steps')
	  	.dropTableIfExists('recipes')
  )
};
