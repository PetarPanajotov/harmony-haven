const env = process.env.NODE_ENV || 'development';
const config = {
    development: {
        port: process.env.PORT || 3000,
        databaseURL: process.env.DB_URL || 'mongodb://127.0.0.1:27017/harmony-haven',
    },
    production: {
        port: process.env.PORT || 3000,
        databaseURL: process.env.DB_URL
    }
}
module.exports = config[env]