const express = require('express');

const router = express.Router();

const runTracker = require('./runTracker-model');

// Gets all runs //
router.get('/', (req, res) => {
    runTracker.getAllRuns()
        .then(runs => {
            res.status(200).json(runs)
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({ Error: ' Error getting the run list' })
        })
})

// Gets all published runs //
router.get('/runs', (req, res) => {
    runTracker.getPublishedRuns()
        .then(runs => {
            res.status(200).json(runs)
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({ Error: 'Error getting the run list' })
        })
})


module.exports = router;