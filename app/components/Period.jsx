var React = require('react');
var Event = require('./Event.jsx');

var Period = React.createClass({
    getDefaultProps: function() {
        return {
            period: '',
            bookend: '',
            tone: '',
            events: []
        }
    },

    render: function() {
        console.log("Period props", this.props);
        return (
            <li className={this.props.bookend}>
                <h3>{this.props.period} <icon className={this.props.tone} /></h3>
                <ul>
                    {this.props.events.map(function(value, i) {
                        return <Event key={i} {...value} />
                    })}
                </ul>
            </li>
        )
    }
});

module.exports = Period;