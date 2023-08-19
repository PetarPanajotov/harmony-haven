const express = require('express');
// require('dotenv').config();
const cors = require('cors');
const databaseInit = require('./config/database');
const config = require('./config/config');
const router = require('./routes/routes');
const cookieParser = require('cookie-parser');
const { logRequest } = require('./middlewares/logRequest');
// origin: ['http://localhost:3000', 'http://localhost:4200']
async function startServer() {
    try {
        await databaseInit()
        const app = express();
        app.use(cookieParser())
        const allowedOrigins = [
            'https://harmony-haven-4e17a.web.app',
            // Add more origins as needed
        ];

        const corsOptions = {
            origin: function (origin, callback) {
                if (allowedOrigins.includes(origin) || !origin) {
                    callback(null, true);
                } else {
                    callback(new Error('Not allowed by CORS'));
                }
            },
            credentials: true,
        };

        app.use(cors(corsOptions));
        app.use(express.json());
        app.use(logRequest)
        app.use(router);
        app.listen(config.port, () => {
            console.log(`Server is running on port ${config.port}`)
        })
    }
    catch (error) {
        console.log(error)
    }
}
startServer();