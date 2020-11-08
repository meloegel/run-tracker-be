
exports.seed = function (knex, Promise) {
  return knex('users').insert([
    { id: 1, username: 'Mark', password: 'asd', email: 'email@email.com' },
    { id: 2, username: 'RunnerDude', password: 'asd', email: 'testemail@email.com' },
    { id: 3, username: 'JustKeepRunning', password: 'asd', email: 'emailtest@email.com' }
  ]);
};
