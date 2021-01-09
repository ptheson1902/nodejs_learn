// Using Node.js `require()`
const mongoose = require('mongoose');

async function connect() {
    //connect to MongoDB
    try {
        await mongoose.connect('mongodb://localhost/nodejs_dev', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true,
        });
        console.log('Connect Successfuly!');
    } catch {
        console.log('Connect Error!!!');
    }
}

module.exports = { connect };
