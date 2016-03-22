var React = require('react');

var Character = React.createClass({
    getDefaultProps: function() {
        return {
            character: '',
            thoughts: ''
        }
    },

    render: function() {
        return (
            <li className="character">
                <p>{this.props.character}, <em>{this.props.thoughts}</em></p>
            </li>
        )
    }
});

module.exports = Character;