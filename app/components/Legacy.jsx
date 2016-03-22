var React = require('react');

var Legacy = React.createClass({
    getDefaultProps: function() {
        return {
            legacy: '',
            player: ''
        }
    },

    render: function() {
        console.log('Legacy props', this.props);
        return (
            <li>{this.props.legacy}, {this.props.player}</li>
        )
    }
});

module.exports = Legacy;