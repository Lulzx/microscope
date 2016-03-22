var React = require('react');
var Period = require('./Period.jsx');

var Periods = React.createClass({
    getDefaultProps: function() {
        return {
            periods: []
        }
    },

    render: function() {
        console.log('Periods props', this.props);
        return (
            <div className="periods">
                <h2>Periods</h2>
                <ul>
                    {this.props.periods.map(function(value, i) {
                        return <Period key={i} {...value} />
                    })}
                </ul>
            </div>
        )
    }
});

module.exports = Periods;