var React = require('react');
var Event = require('./Event.jsx');

var Period = React.createClass({
    getDefaultProps: function() {
        return {
            period: {
                period: '',
                bookend: '',
                tone: '',
                events: []

            }
        }
    },

    render: function() {
        console.log("Period props", this.props);
        return (
            <li className={this.props.period.bookend}>
                <h3>{this.props.period.period} <icon className={this.props.period.tone} /></h3>
                <ul>
                    {this.props.period.events.map(function(value) {
                        return <Event {...value} />
                    })}
                </ul>
            </li>
        )
    }
});

module.exports = Period;