
exports.seed = function (knex, Promise) {
  return knex('users').insert([
    { id: 1, username: 'Mark', password: 'asdasd', location: 'Detroit, MI', email: 'email@email.com', avatar: 'https://img.etimg.com/thumb/msid-67536727,width-650,imgsize-779412,,resizemode-4,quality-100/running-shoes_gettyimages.jpg' },
    { id: 2, username: 'RunnerDude', location: 'Devner, Co', password: 'asdasd', email: 'testemail@email.com', avatar: 'https://st4.depositphotos.com/3369547/25587/v/1600/depositphotos_255876378-stock-illustration-young-athletic-man-running-avatar.jpg' },
    { id: 3, username: 'JustKeepRunning', location: 'Miami, FL', password: 'asdasd', email: 'emailtest@email.com', avatar: 'https://images-na.ssl-images-amazon.com/images/I/5122iTN7t0L._AC_.jpg' }
  ]);
};
