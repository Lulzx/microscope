var React = require('react');
var WebAPI = require('../utils/WebAPI.js');
var BigPicture = require('../components/BigPicture.jsx');
var Focuses = require('../components/Focuses.jsx');

var Game = React.createClass({
    getInitialState: function() {
        return {};
    },

    componentDidMount: function() {
      this.serverRequest = WebAPI.getGameData('/games/first_game.json').done(function(data) {
          console.log(data);
          this.setState(JSON.parse(data.response));
      }.bind(this));
    },

    componentWillUnmount: function() {
        this.serverRequest.abort();
    },

    render: function() {
        return (
            <div>
                <BigPicture bigPicture={this.state.bigPicture} />
                <Focuses focuses={this.state.focuses} />
            </div>
        );
    }
});

module.exports = Game;