var React = require('react');
var Focus = require('./Focus.jsx');

var Focuses = React.createClass({
    getDefaultProps: function() {
        return { focuses: []};
    },

    render: function() {
        return (
            <div className='focuses'>
                <h2>Focuses</h2>
                <ul>
                    {this.props.focuses.map(function(value, i) {
                        return <Focus key={i} focus={value.focus} player={value.player} />;
                    })}
                </ul>
            </div>
        );
    }
});

module.exports = Focuses;