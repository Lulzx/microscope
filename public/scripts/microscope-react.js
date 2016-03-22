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
	var Palette = __webpack_require__(8);
	var Legacies = __webpack_require__(11);
	var Periods = __webpack_require__(13);

	var Game = React.createClass({
	    displayName: 'Game',

	    getInitialState: function getInitialState() {
	        return {};
	    },

	    componentDidMount: function componentDidMount() {
	        this.serverRequest = WebAPI.getGameData('/games/first_game.json').done(function (data) {
	            console.log("ComponentDidMount", data);
	            this.setState(JSON.parse(data.response));
	        }.bind(this));
	    },

	    componentWillUnmount: function componentWillUnmount() {
	        this.serverRequest.abort();
	    },

	    render: function render() {
	        console.log("Game Render, state", this.state);
	        return React.createElement(
	            'div',
	            null,
	            React.createElement(BigPicture, { bigPicture: this.state.bigPicture }),
	            React.createElement(Focuses, { focuses: this.state.focuses }),
	            React.createElement(Palette, this.state.palette),
	            React.createElement(Legacies, { legacies: this.state.legacies }),
	            React.createElement(Periods, { periods: this.state.periods })
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

	    getDefaultProps: function getDefaultProps() {
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

	    getDefaultProps: function getDefaultProps() {
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
	                this.props.focuses.map(function (value, i) {
	                    return React.createElement(Focus, { key: i, focus: value.focus, player: value.player });
	                })
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

	    getDefaultProps: function getDefaultProps() {
	        return {
	            focus: '',
	            player: ''
	        };
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

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1);
	var Adds = __webpack_require__(9);
	var Bans = __webpack_require__(10);

	var Palette = React.createClass({
	    displayName: 'Palette',

	    getDefaultProps: function getDefaultProps() {
	        return {
	            adds: [],
	            bans: []
	        };
	    },

	    render: function render() {
	        console.log("Palette", this.props);
	        return React.createElement(
	            'div',
	            { className: 'palette' },
	            React.createElement(
	                'h2',
	                null,
	                'Palette'
	            ),
	            React.createElement(Adds, { adds: this.props.adds }),
	            React.createElement(Bans, { bans: this.props.bans })
	        );
	    }
	});

	module.exports = Palette;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var React = __webpack_require__(1);

	var Adds = React.createClass({
	    displayName: "Adds",

	    getDefaultProps: function getDefaultProps() {
	        return { adds: [] };
	    },

	    render: function render() {
	        console.log("Adds", this.props);
	        return React.createElement(
	            "div",
	            null,
	            React.createElement(
	                "h3",
	                null,
	                "Adds"
	            ),
	            React.createElement(
	                "ul",
	                { className: "adds" },
	                this.props.adds.map(function (value, i) {
	                    return React.createElement(
	                        "li",
	                        { key: i },
	                        value
	                    );
	                })
	            )
	        );
	    }
	});

	module.exports = Adds;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var React = __webpack_require__(1);

	var Bans = React.createClass({
	    displayName: "Bans",

	    getDefaultProps: function getDefaultProps() {
	        return { bans: [] };
	    },

	    render: function render() {
	        console.log("Bans", this.props);
	        return React.createElement(
	            "div",
	            null,
	            React.createElement(
	                "h3",
	                null,
	                "Bans"
	            ),
	            React.createElement(
	                "ul",
	                { className: "bans" },
	                this.props.bans.map(function (value, i) {
	                    return React.createElement(
	                        "li",
	                        { key: i },
	                        value
	                    );
	                })
	            )
	        );
	    }
	});

	module.exports = Bans;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1);
	var Legacy = __webpack_require__(12);

	var Legacies = React.createClass({
	    displayName: 'Legacies',

	    getDefaultProps: function getDefaultProps() {
	        return {
	            legacies: [{
	                legacy: '',
	                player: ''
	            }]
	        };
	    },

	    render: function render() {
	        console.log('Legacies props', this.props);
	        return React.createElement(
	            'div',
	            { className: 'legacies' },
	            React.createElement(
	                'h2',
	                null,
	                'Legacies'
	            ),
	            React.createElement(
	                'ul',
	                { className: 'legacy-list' },
	                this.props.legacies.map(function (value, i) {
	                    return React.createElement(Legacy, { key: i, legacy: value.legacy, player: value.player });
	                })
	            )
	        );
	    }
	});

	module.exports = Legacies;

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1);

	var Legacy = React.createClass({
	    displayName: 'Legacy',

	    getDefaultProps: function getDefaultProps() {
	        return {
	            legacy: '',
	            player: ''
	        };
	    },

	    render: function render() {
	        console.log('Legacy props', this.props);
	        return React.createElement(
	            'li',
	            null,
	            this.props.legacy,
	            ', ',
	            this.props.player
	        );
	    }
	});

	module.exports = Legacy;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var React = __webpack_require__(1);
	var Period = __webpack_require__(14);

	var Periods = React.createClass({
	    displayName: 'Periods',

	    getDefaultProps: function getDefaultProps() {
	        return {
	            periods: []
	        };
	    },

	    render: function render() {
	        console.log('Periods props', this.props);
	        return React.createElement(
	            'div',
	            { className: 'periods' },
	            React.createElement(
	                'h2',
	                null,
	                'Periods'
	            ),
	            React.createElement(
	                'ul',
	                null,
	                this.props.periods.map(function (value, i) {
	                    return React.createElement(Period, _extends({ key: i }, value));
	                })
	            )
	        );
	    }
	});

	module.exports = Periods;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var React = __webpack_require__(1);
	var Event = __webpack_require__(15);

	var Period = React.createClass({
	    displayName: 'Period',

	    getDefaultProps: function getDefaultProps() {
	        return {
	            period: '',
	            bookend: '',
	            tone: '',
	            events: []
	        };
	    },

	    render: function render() {
	        console.log("Period props", this.props);
	        return React.createElement(
	            'li',
	            { className: this.props.bookend },
	            React.createElement(
	                'h3',
	                null,
	                this.props.period,
	                ' ',
	                React.createElement('icon', { className: this.props.tone })
	            ),
	            React.createElement(
	                'ul',
	                null,
	                this.props.events.map(function (value, i) {
	                    return React.createElement(Event, _extends({ key: i }, value));
	                })
	            )
	        );
	    }
	});

	module.exports = Period;

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var React = __webpack_require__(1);
	var Scene = __webpack_require__(16);

	var Event = React.createClass({
	    displayName: 'Event',

	    getDefaultProps: function getDefaultProps() {
	        return {
	            event: '',
	            tone: '',
	            scenes: []
	        };
	    },

	    render: function render() {
	        console.log("Event props", this.props);
	        return React.createElement(
	            'li',
	            { className: 'event' },
	            React.createElement(
	                'h4',
	                null,
	                this.props.event,
	                ' ',
	                React.createElement('icon', { className: this.props.tone })
	            ),
	            React.createElement(
	                'ul',
	                { className: 'scenes' },
	                this.props.scenes.map(function (value, i) {
	                    return React.createElement(Scene, _extends({ key: i }, value));
	                })
	            )
	        );
	    }
	});

	module.exports = Event;

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var React = __webpack_require__(1);
	var Character = __webpack_require__(17);

	var Scene = React.createClass({
	    displayName: 'Scene',

	    getDefaultProps: function getDefaultProps() {
	        return {
	            question: '',
	            answer: '',
	            tone: '',
	            setting: '',
	            notes: '',
	            characters: [],
	            plot: ''
	        };
	    },

	    render: function render() {
	        console.log("Scene props", this.props);
	        return React.createElement(
	            'li',
	            { className: 'scene' },
	            React.createElement(
	                'div',
	                { className: 'header' },
	                React.createElement('icon', { className: this.props.tone }),
	                React.createElement(
	                    'h5',
	                    null,
	                    this.props.question,
	                    ' ',
	                    this.props.answer
	                )
	            ),
	            React.createElement(
	                'div',
	                { className: 'body' },
	                React.createElement(
	                    'h6',
	                    null,
	                    'Setting'
	                ),
	                React.createElement(
	                    'p',
	                    null,
	                    this.props.setting
	                ),
	                React.createElement(
	                    'h6',
	                    null,
	                    'Notes'
	                ),
	                React.createElement(
	                    'p',
	                    null,
	                    this.props.notes
	                ),
	                React.createElement(
	                    'h6',
	                    null,
	                    'Characters'
	                ),
	                React.createElement(
	                    'ul',
	                    { className: 'characters' },
	                    this.props.characters.map(function (value, i) {
	                        return React.createElement(Character, _extends({ key: i }, value));
	                    })
	                ),
	                React.createElement(
	                    'h6',
	                    null,
	                    'Plot'
	                ),
	                React.createElement(
	                    'p',
	                    null,
	                    this.props.plot
	                )
	            )
	        );
	    }
	});

	module.exports = Scene;

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1);

	var Character = React.createClass({
	    displayName: 'Character',

	    getDefaultProps: function getDefaultProps() {
	        return {
	            character: '',
	            thoughts: ''
	        };
	    },

	    render: function render() {
	        return React.createElement(
	            'li',
	            { className: 'character' },
	            React.createElement(
	                'p',
	                null,
	                this.props.character,
	                ', ',
	                React.createElement(
	                    'em',
	                    null,
	                    this.props.thoughts
	                )
	            )
	        );
	    }
	});

	module.exports = Character;

/***/ }
/******/ ]);