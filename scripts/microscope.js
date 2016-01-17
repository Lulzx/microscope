'use strict';

var Microscope = {};

Microscope.ajax = {};

Microscope.ajax.get = function(url) {
    var request = new XMLHttpRequest();

    request.open("GET", url, true);
    request.send();

    return {
        done: function(callback) {
            request.onreadystatechange = function() {
                if (request.readyState === XMLHttpRequest.DONE && request.status === 200) {
                    callback(request);
                }
            }
        }
    }
};

Microscope.ajax.get("first_game.json").done(function(data) {
    var json = JSON.parse(data.responseText);
    Microscope.ajax.get("templates/main.html").done(function(data) {
        document.body.innerHTML = Handlebars.compile(data.responseText)(json);
    });
});
