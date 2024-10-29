const User = require('../../models/User');
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async (knex) => {
  // Before you have models you can always just do `await knex('table_name').del`
    // Clear existing data and reset sequences
    await knex('transaction_history').del();
    await knex('random_events').del();
    await knex('budgets').del();
    await knex('simulations').del();
    await knex('users').del();
    await knex('user_profile').del();
  
    await knex.raw('ALTER SEQUENCE transaction_history_id_seq RESTART WITH 1');
    await knex.raw('ALTER SEQUENCE random_events_id_seq RESTART WITH 1');
    await knex.raw('ALTER SEQUENCE budgets_id_seq RESTART WITH 1');
    await knex.raw('ALTER SEQUENCE simulations_id_seq RESTART WITH 1');
    await knex.raw('ALTER SEQUENCE users_id_seq RESTART WITH 1');
    // await knex.raw('ALTER SEQUENCE user_profile_id_seq RESTART WITH 1');

  // User.create(username, password)
  await User.create('cool_cat', '1234');
  await User.create('l33t-guy', '1234');
  await User.create('wowow', '1234');
};
