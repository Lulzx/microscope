var React = require('react');

var Focus = React.createClass({
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