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
        app.use(cors({
            origin: ['https://harmony-haven.onrender.com/', 'https://harmony-haven-4e17a.web.app/'],
            credentials: true
        }
        ));
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