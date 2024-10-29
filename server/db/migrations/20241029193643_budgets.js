/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('budgets', (table) => {
    table.increments('id')
    table.integer('simulation_id').references('id').inTable('simulations')
    table.integer('savings')
    table.integer('wants')
    table.integer('needs')
    table.string('life_style')
  })
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => knex.schema.dropTable('budgets');
