var mongoose = require('mongoose'),
    acceptanceTestModel = require('../models/Registration');
    
module.exports = function(config) {
    mongoose.connect(config.db);

    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error...'));
    db.once('open', function callback() {
        console.log('registration db opened');
    });
}