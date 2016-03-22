var React = require('react');
var Scene = require('./Scene.jsx');

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
            <li className="event">

                <h4>{this.props.event} <icon className={this.props.tone} /></h4>

                <ul className="scenes">
                {this.props.scenes.map(function(value, i) {
                    return <Scene key={i} {...value} />
                })}
                </ul>
            </li>
        )
    }
});

module.exports = Event;