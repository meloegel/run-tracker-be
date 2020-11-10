const express = require('express');

const router = express.Router();

const runTracker = require('./runTracker-model');
const Users = require('../users/users-model');

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

//Gets a users info for run post info //
router.get('/user/:id', (req, res) => {
    const { id } = req.params
    Users.getUser(id)
        .then(user => {
            if (user) {
                res.status(200).json(user)
            } else {
                res.status(404).json({ Error: `Could not find user with id: ${id}` })
            }
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({ Error: 'Error getting user' })
        })
})

module.exports = router;