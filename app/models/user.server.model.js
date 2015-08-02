/**
 * Created by mmaia on 01/08/15.
 */
'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var UserSchema = new Schema({
    firstName: String,
    lastName: String,
    email: {
        type: String,
        index: true,
        match: /.+\@.+\..+/
    },
    username: {
        type: String,
        trim: true,
        unique: true,
        index: true
    },
    password: {
        type: String,
        validate: [
            function(password){
                return password.length >= 6;
            }, 'Password should be longer, at least 6'
        ]
    },
    created: {
        type: Date,
        default: Date.now
    },
    website: {
        type: String,
        set: function(url){
            if(!url){
                return url;
            }else{
                if(url.indexOf('http://' !== 0) && url.indexOf('https://' !== 0)){
                    url = 'http://' + url;
                }
                return url;
            }
        },
        get: function(url){
            if(!url){
                return url;
            }else{
                if(url.indexOf('http://' !== 0) && url.indexOf('https://' !== 0)){
                    url = 'http://' + url;
                }
                return url;
            }
        }
    }
});

UserSchema.virtual('fullName').get(function(){
    return this.firstName + ' ' + this.lastName;
});

//registers the getters to be called any time the object is loaded from MongoDB
UserSchema.set('toJSON', {getters: true, virtuals: true});

//register this schema as a mongodb model to be used by the app.
mongoose.model('User', UserSchema);