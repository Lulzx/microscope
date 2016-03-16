/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1);
	var Game = __webpack_require__(2);
	var BigPicture = __webpack_require__(5);

	ReactDOM.render(React.createElement(Game, null), document.getElementById('content'));

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1);
	var WebAPI = __webpack_require__(3);
	var BigPicture = __webpack_require__(5);
	var Focuses = __webpack_require__(6);

	var Game = React.createClass({
	    displayName: 'Game',

	    getInitialState: function getInitialState() {
	        return {};
	    },

	    componentDidMount: function componentDidMount() {
	        this.serverRequest = WebAPI.getGameData('/games/first_game.json').done(function (data) {
	            console.log(data);
	            this.setState(data);
	        }.bind(this));
	    },

	    componentWillUnmount: function componentWillUnmount() {
	        this.serverRequest.abort();
	    },

	    render: function render() {
	        return React.createElement(
	            'div',
	            null,
	            React.createElement(BigPicture, null),
	            React.createElement(Focuses, null)
	        );
	    }
	});

	module.exports = Game;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Ajax = __webpack_require__(4);

	module.exports = {
	    getGameData: function getGameData(gameId) {
	        var gameUrl = gameId;

	        return Ajax.get(gameUrl);
	    }
	};

/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";

	var Ajax = {};

	Ajax.get = function (url) {
	    var request = new XMLHttpRequest();

	    request.open("GET", url, true);
	    request.send();

	    return {
	        done: function done(callback) {
	            request.onreadystatechange = function () {
	                if (request.readyState === XMLHttpRequest.DONE && request.status === 200) {
	                    callback(request);
	                }
	            };
	        }
	    };
	};

	module.exports = Ajax;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1);

	var BigPicture = React.createClass({
	    displayName: 'BigPicture',

	    getInitialState: function getInitialState() {
	        return { bigPicture: 'The Big Picture' };
	    },

	    render: function render() {
	        return React.createElement(
	            'h1',
	            { className: 'big-picture' },
	            this.props.bigPicture
	        );
	    }
	});

	module.exports = BigPicture;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1);
	var Focus = __webpack_require__(7);

	var Focuses = React.createClass({
	    displayName: 'Focuses',

	    getInitialState: function getInitialState() {
	        return { focuses: [] };
	    },

	    render: function render() {
	        return React.createElement(
	            'div',
	            { className: 'focuses' },
	            React.createElement(
	                'h2',
	                null,
	                'Focuses'
	            ),
	            React.createElement(
	                'ul',
	                null,
	                'wat'
	            )
	        );
	    }
	});

	module.exports = Focuses;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1);

	var Focus = React.createClass({
	    displayName: 'Focus',

	    getInitialState: function getInitialState() {
	        return { focus: 'A focus', player: 'A player' };
	    },

	    render: function render() {
	        return React.createElement(
	            'li',
	            { className: 'focus' },
	            this.props.focus,
	            ', ',
	            this.props.player
	        );
	    }
	});

	module.exports = Focus;

/***/ }
/******/ ]);