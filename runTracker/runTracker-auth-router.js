const express = require('express');

const router = express.Router();

const runTracker = require('./runTracker-model');

// Gets a run //
router.get('/run/:id', (req, res) => {
    const { id } = req.params
    runTracker.getRun(id)
        .then(run => {
            if (run) {
                res.status(200).json(run)
            } else {
                res.status(404).json({ Error: `Could not find run with id: ${id}` })
            }
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({ Error: `Error getting runs with id: ${id} ` })
        })
})

// Gets a users runs //
router.get('/user/:id', (req, res) => {
    const { id } = req.params;
    runTracker.getUserRuns(id)
        .then(runs => {
            if (runs) {
                res.status(200).json(runs)
            } else {
                res.status(404).json({ Error: `Could not find runs for user with id: ${id}` })
            }
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({ Error: `Error getting runs for user with id: ${id} ` })
        })
})

// Posts a new run //
router.post('/', (req, res) => {
    const newRun = req.body
    runTracker.addRun(newRun)
        .then(run => {
            res.status(201).json({ Posted: newRun })
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({ Error: 'Error adding run' })
        })
})

// Updates a run //
router.put('/:id', (req, res) => {
    const { id } = req.params
    const changes = req.body
    runTracker.getAllRuns(id)
        .then(run => {
            if (run) {
                runTracker.updateRun(changes, id)
                    .then(updatedRun => {
                        res.status(200).json({ Message: `Updated run with id: ${id}` })
                    })
            } else {
                res.status(404).json({ Error: `Could not find run with id: ${id}` })
            }
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({ Error: 'Failed to update run' })
        })
})

// Deletes a run //
router.delete('/:id', (req, res) => {
    const { id } = req.params
    runTracker.deleteRun(id)
        .then(deleted => {
            if (deleted) {
                res.status(200).json({ Message: `Run with id: ${id} has been deleted` })
            } else {
                res.status(404).json({ Error: `Could not find run with id: ${id}` })
            }
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({ Error: 'Error deleting run' })
        })
})


module.exports = router;