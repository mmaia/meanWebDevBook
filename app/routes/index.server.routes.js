/**
 * Created by mmaia on 01/08/15.
 */
'use strict';

module.exports = function(app){
    var index = require('../controllers/index.server.controller');
    app.get('/', index.render);
};