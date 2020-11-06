const express = require('express');
const helmet = require('helmet');
const cors = require('cors')



const server = express();



server.use(helmet());
server.use(cors());
server.use(express.json());





server.get('/', (req, res) => {
    const message = process.env.MESSAGE
    res.status(200).json({ message });
});

module.exports = server;

