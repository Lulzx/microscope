var React = require('react');

var Focus = React.createClass({
    getDefaultProps: function() {
        return {
            focus: '',
            player: ''
        }
    },

    render: function() {
        return (
            <li className="focus" >{this.props.focus}, {this.props.player}</li>
        );
    }
});

module.exports = Focus;