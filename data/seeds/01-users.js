
exports.seed = function (knex, Promise) {
  return knex('users').insert([
    { id: 1, username: 'Mark', password: 'asd', location: 'Detroit, MI', email: 'email@email.com', avatar: 'https://cdn0.iconfinder.com/data/icons/world-issues/500/running_man-512.png' },
    { id: 2, username: 'RunnerDude', location: 'Devner, Co', password: 'asd', email: 'testemail@email.com', avatar: 'https://st4.depositphotos.com/3369547/25587/v/1600/depositphotos_255876378-stock-illustration-young-athletic-man-running-avatar.jpg' },
    { id: 3, username: 'JustKeepRunning', location: 'USA', password: 'asd', email: 'emailtest@email.com', avatar: 'https://images-na.ssl-images-amazon.com/images/I/5122iTN7t0L._AC_.jpg' }
  ]);
};
