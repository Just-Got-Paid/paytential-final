/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('random_events', (table) => {
    table.increments('id')
    table.string('event_name')
    table.string('event_description')
    table.integer('impact_amount')
    table.string('impact_type')
  })
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => knex.schema.dropTable('random_events');
