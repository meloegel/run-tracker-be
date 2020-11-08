
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
    },
    {
      id: 4, runTime: '31:48', distance: 4, publish: true, pace: '7:53', description: 'Hard run but did not die, prefect weather!', userId: 1
    },
    {
      id: 5, runTime: '37:08', distance: 4, publish: true, pace: '8:50', description: 'Great run!', userId: 2
    },
    {
      id: 6, runTime: '42:08', distance: 6, publish: true, pace: '8:31', description: 'Great trail!', userId: 3
    },
    {
      id: 7, runTime: '32:11', distance: 4, publish: true, pace: '8:09', description: 'Little knee pain but not bad', userId: 1
    },
    {
      id: 8, runTime: '25:07', distance: 3, publish: true, pace: '8:18', description: 'Good run', userId: 1
    },
    {
      id: 9, runTime: '19:08', distance: 2, publish: true, pace: '8:49', description: 'Too hot today', userId: 2
    },
    {
      id: 10, runTime: '52:22', distance: 8, publish: true, pace: '8:01', description: 'Long run today', userId: 3
    },
    {
      id: 11, runTime: '38:08', distance: 5, publish: true, pace: '7:59', description: 'Nice pace today', userId: 3
    },
    {
      id: 12, runTime: '20:33', distance: 2, publish: true, pace: '9:19', description: 'Got out there today', userId: 2
    }
  ]);
};