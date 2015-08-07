/**
 * Created by mmaia on 01/08/15.
 */
'use strict';

module.exports = {
    db: 'mongodb://localhost/mean-book',
    sessionSecret: 'developmentSessionSecret',
    facebook: {
        clientID: '592207727481116',
        clientSecret: 'd4c484a644a9248f5782e451b25000d3',
        callbackURL: 'http://localhost:3000/oauth/facebook/callback'
    },
    twitter: {
        clientID: ' gR5lnW8woEG1R4xW7TEFxF3mY',
        clientSecret: 'cWMBs3VFORdaAAdURYPVZ1qoMXhSiDHZgQvoBVDhlkbnEGaNUJ',
        callbackURL: 'http://127.0.0.1:3000/oauth/twitter/callback'
    }
};

