var Ajax = require('./Ajax.js');

module.exports = {
    getGameData: function(gameId) {
        var gameUrl = gameId;

        return Ajax.get(gameUrl);
    }
};