var React = require('react');
var Focus = require('./Focus.jsx');

var Focuses = React.createClass({
    getInitialState: function() {
        return { focuses: [] };
    },

    render: function() {
        return (
            <div className='focuses'>
                <h2>Focuses</h2>
                <ul>wat</ul>
            </div>
        );
    }
});

module.exports = Focuses;