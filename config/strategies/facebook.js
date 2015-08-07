/**
 * Created by mmaia on 8/5/15.
 */
'use strict';

var passport = require('passport'),
    FacebookStrategy = require('passport-facebook').Strategy,
    config = require('../config'),
    users = require('../../app/controllers/users.server.controller');

module.exports = function(){
    passport.use(new FacebookStrategy({
        clientID: config.facebook.clientID,
        clientSecret: config.facebook.clientSecret,
        callbackURL: config.facebook.callbackURL,
        passReqToCallback: true},
        function(req, accessToken, refreshToken, profile, done){
            var providerData = profile._json;
            providerData.accessToken - accessToken;
            providerData.refreshToken = refreshToken;
            var providerUserProfile = {
                firstName: profile.name.givenName,
                lastName: profile.name.familyName,
                fullName: profile.displayName,
                email: profile.emails[0].value,
                username: profile.username,
                provider: 'facebook',
                providerId: profile.id,
                providerData: providerData
            };
            console.log(providerUserProfile);
            users.saveOauthUserProfile(req, providerUserProfile, done);
        }
    ));
};