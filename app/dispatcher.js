var guid = require('guid');

var listeners = {};

// making my own dispatcher, this project is about learning react, not flux
module.exports = {
    register:function(callback) {
        console.log('Registering callback')
        var id = guid.raw();
        listeners[id] = callback;
        return id;
    },
    dispatch:function(payload) {
        console.info("Inside dispatcher: dispatching payload...", payload);
        for ( var key in listeners) {
            var listener = listeners[key];
            listener(payload);
        }
    }
}