const db = require('../data/db-config')

module.exports = {
    getAllRuns,
    getUserRuns,
    addRun,
    updateRun,
    deleteRun
}

function getAllRuns() {
    return db('runTimes')
}

function getUserRuns(id) {
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