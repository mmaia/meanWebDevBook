/**
 * Created by mmaia on 01/08/15.
 */
'use strict';
exports.render = function (req, res) {

    if (req.session.lastVisit) {
        console.log(req.session.lastVisit);
    }

    req.session.lastVisit = new Date();

    res.render('index', {
        title: 'Hello World'
    })

};
