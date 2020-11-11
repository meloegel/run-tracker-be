const db = require('../data/db-config')

module.exports = {
    getAllRuns,
    getPublishedRuns,
    getRun,
    addRun,
    updateRun,
    deleteRun,
    getUserRuns
}

function getAllRuns() {
    return db('runTimes')
}

function getPublishedRuns() {
    return db('runTimes')
        .where('publish', true)
}

function getRun(id) {
    return db('runTimes')
        .where({ id })
        .first()
}

function addRun(run) {
    return db('runTimes').insert(run, 'id')
}

function updateRun(changes, id) {
    return db('runTimes')
        .where({ id })
        .update(changes)
}

function deleteRun(id) {
    return db('runTimes')
        .where({ id })
        .del()
}

function getUserRuns(id) {
    return db('runTimes')
        .select('runTimes.id AS runTimeID', 'runTimes.runTime', 'runTimes.distance',
            'runTimes.publish', 'runTimes.timePosted', 'runTimes.pace',
            'runTimes.description').where({ 'runTimes.userId': id })
        .join('users', 'users.id', 'runTimes.userId').orderBy('runTimes.id')
}