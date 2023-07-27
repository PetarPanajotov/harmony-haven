const express = require('express');
require('dotenv').config()
const cors = require('cors');
const databaseInit = require('./config/database');
const config = require('./config/config')

databaseInit()
    .then(() => {
        const app = express();
        app.use(cors())
        app.listen(config.port, () => {
            console.log(`Server is running on port ${config.port}`)
        })
    })