var React = require('react');

var Focus = React.createClass({
    //todo find out if getInitialState and getDefaultProps are necessary functions
    //todo it seems like getDefaultProps is a half-decent way to note the object type the render function is expecting
    //todo but maybe both functions can be omitted when they're just going to blank anyways
    //getInitialState: function() {
    //    return { focus: 'A focus', player: 'A player' };
    //},

    render: function() {
        return (
            <li className="focus" >{this.props.focus}, {this.props.player}</li>
        );
    }
});

module.exports = Focus;