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
	        //todo fix the naming convention that causes weird object nesting:
	        //todo as in, period.period, event.event, and so on
	        console.log("Game Render, state", this.state);
	        console.log("Game Render, state.palette", this.state.palette);
	        return React.createElement(
	            'div',
	            null,
	            React.createElement(BigPicture, { bigPicture: this.state.bigPicture }),
	            React.createElement(Focuses, { focuses: this.state.focuses }),
	            React.createElement(Palette, { palette: this.state.palette }),
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
	                this.props.focuses.map(function (value) {
	                    return React.createElement(Focus, { focus: value.focus, player: value.player });
	                })
	            )
	        );
	    }
	});

	module.exports = Focuses;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var React = __webpack_require__(1);

	var Focus = React.createClass({
	    displayName: "Focus",

	    //todo find out if getInitialState and getDefaultProps are necessary functions
	    //todo it seems like getDefaultProps is a half-decent way to note the object type the render function is expecting
	    //todo but maybe both functions can be omitted when they're just going to blank anyways
	    //getInitialState: function() {
	    //    return { focus: 'A focus', player: 'A player' };
	    //},

	    render: function render() {
	        return React.createElement(
	            "li",
	            { className: "focus" },
	            this.props.focus,
	            ", ",
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
	            palette: {
	                adds: [],
	                bans: []
	            }
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
	            React.createElement(Adds, { adds: this.props.palette.adds }),
	            React.createElement(Bans, { bans: this.props.palette.bans })
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
	                this.props.adds.map(function (value) {
	                    return React.createElement(
	                        "li",
	                        null,
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
	                this.props.bans.map(function (value) {
	                    return React.createElement(
	                        "li",
	                        null,
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
	                this.props.legacies.map(function (value) {
	                    return React.createElement(Legacy, { legacy: value.legacy, player: value.player });
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
	                this.props.periods.map(function (value) {
	                    return React.createElement(Period, { period: value });
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

	var React = __webpack_require__(1);
	var Event = __webpack_require__(15);

	var Period = React.createClass({
	    displayName: 'Period',

	    getDefaultProps: function getDefaultProps() {
	        return {
	            period: {
	                period: '',
	                bookend: '',
	                tone: '',
	                events: []

	            }
	        };
	    },

	    render: function render() {
	        console.log("Period props", this.props);
	        return React.createElement(
	            'li',
	            { className: this.props.period.bookend },
	            React.createElement(
	                'h3',
	                null,
	                this.props.period.period,
	                ' ',
	                React.createElement('icon', { className: this.props.period.tone })
	            ),
	            React.createElement(
	                'ul',
	                null,
	                this.props.period.events.map(function (value) {
	                    return React.createElement(Event, value);
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

	var React = __webpack_require__(1);

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
	            'h4',
	            null,
	            this.props.event,
	            ' ',
	            React.createElement('icon', { className: this.props.tone })
	        );
	    }
	});

	module.exports = Event;

/***/ }
/******/ ]);