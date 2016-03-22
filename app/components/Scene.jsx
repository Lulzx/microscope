var React = require('react');
var Character = require('./Character.jsx');

var Scene = React.createClass({
    getDefaultProps: function() {
        return {
            question: '',
            answer: '',
            tone: '',
            setting: '',
            notes: '',
            characters: [],
            plot: ''
        }
    },

    render: function() {
        console.log("Scene props", this.props);
        return (
            <li className="scene">
                <icon className={this.props.tone} />
                <h5>{this.props.question} {this.props.answer}</h5>

                <h6>Setting</h6>
                <p>{this.props.setting}</p>

                <h6>Notes</h6>
                <p>{this.props.notes}</p>

                <h6>Characters</h6>
                <ul className="characters">
                    {this.props.characters.map(function(value, i) {
                        return <Character key={i} {...value} />
                    })}
                </ul>

                <h6>Plot</h6>
                <p>{this.props.plot}</p>
            </li>
        )
    }
});

module.exports = Scene;