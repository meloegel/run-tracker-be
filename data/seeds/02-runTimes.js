
exports.seed = function (knex, Promise) {
  return knex('runTimes').insert([
    {
      id: 1, runTime: '24:31', distance: 3, publish: true, pace: '8:10', description: 'Hard run, it was 70 degrees', userId: 1
    },
    {
      id: 2, runTime: '25:07', distance: 3, publish: false, pace: '8:19', description: 'Easy pace', userId: 1
    },
    {
      id: 3, runTime: '33:08', distance: 4, publish: true, pace: '8:19', description: 'Easy pace', userId: 1
    }
  ]);
};