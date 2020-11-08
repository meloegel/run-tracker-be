const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const restrictedMiddleware = require('./auth/restricted-middleware');

const server = express();

const AuthRouter = require('./auth/auth-router');
const UserRouter = require('./users/users-router');
const runTrackerRouter = require('./runTracker/runTracker-router');
const runTrackerAuthRouter = require('./runTracker/runTracker-auth-router');

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/api');
server.use('/api/auth', AuthRouter);
server.use('/api/run-tracker', runTrackerRouter);
server.use('api/auth/users', restrictedMiddleware, UserRouter);
server.use('/api/auth/run-tracker', restrictedMiddleware, runTrackerAuthRouter);

server.get('/', (req, res) => {
    const message = process.env.MESSAGE
    res.status(200).json({ message });
});

module.exports = server;

