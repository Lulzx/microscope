var React = require('react');

var BigPicture = React.createClass({
    getDefaultProps: function() {
        return { bigPicture: 'The Big Picture' };
    },

    render: function() {
        return (
            <h1 className="big-picture">{this.props.bigPicture}</h1>
        );
    }
});

module.exports = BigPicture;