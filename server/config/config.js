const env = process.env.NODE_ENV || 'development';
const config = {
    development: {
        port: process.env.PORT || 3000,
        databaseURL: process.env.DB_URL || 'mongodb://127.0.0.1:27017/harmony-haven',
    },
    production: {
        port: process.env.PORT || 4000,
        databaseURL: process.env.DB_URL_CLOUD 
    }
}
module.exports = config[env]