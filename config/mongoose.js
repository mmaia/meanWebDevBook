/**
 * Created by mmaia on 01/08/15.
 */
'use strict';

var config = require('./config'),
    mongoose = require('mongoose');

module.exports = function(){
    var db = mongoose.connect(config.db);
    require('../app/models/user.server.model');
    return db;
};