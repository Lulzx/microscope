var React = require('react');
var WebAPI = require('../utils/WebAPI.js');
var BigPicture = require('../components/BigPicture.jsx');
var Focuses = require('../components/Focuses.jsx');
var Palette = require('../components/Palette.jsx');
var Legacies = require('../components/Legacies.jsx');
var Periods = require('../components/Periods.jsx');

var Game = React.createClass({
    getInitialState: function() {
        return {};
    },

    componentDidMount: function() {
      this.serverRequest = WebAPI.getGameData('/games/first_game.json').done(function(data) {
          console.log("ComponentDidMount", data);
          this.setState(JSON.parse(data.response));
      }.bind(this));
    },

    componentWillUnmount: function() {
        this.serverRequest.abort();
    },

    render: function() {
        console.log("Game Render, state", this.state);
        return (
            <div>
                <BigPicture bigPicture={this.state.bigPicture} />
                <Focuses focuses={this.state.focuses} />
                <Palette {...this.state.palette} />
                <Legacies legacies={this.state.legacies} />
                <Periods periods={this.state.periods} />
            </div>
        );
    }
});

module.exports = Game;