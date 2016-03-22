var React = require('react');

var Event = React.createClass({
    getDefaultProps: function() {
        return {
            event: '',
            tone: '',
            scenes: []
        }
    },

    render: function() {
        console.log("Event props", this.props);
        return (
            <h4>{this.props.event} <icon className={this.props.tone} /></h4>

        )
    }
});

module.exports = Event;