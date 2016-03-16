var Ajax = {};

Ajax.get = function(url) {
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

module.exports = Ajax;