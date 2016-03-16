'use strict';

var React = require('react');
var Game = require('./views/Game.jsx');
var BigPicture = require('./components/BigPicture.jsx');

ReactDOM.render(
    <Game />,
    document.getElementById('content')
);