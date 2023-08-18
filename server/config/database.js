const config = require('./config');
const mongoose = require('mongoose');

async function databaseInit() {
    mongoose.set('strictQuery', false);
    try {
        console.log(config)
        await mongoose.connect(config.databaseURL);
        return console.log('Database is connected');
    } catch(error) {
        throw new Error('Database connection unsucessfully')
    };
};
module.exports = databaseInit