var React = require('react');
var Legacy = require('./Legacy.jsx');

var Legacies = React.createClass({
    getDefaultProps: function() {
        return {
            legacies: [
                {
                    legacy: '',
                    player: ''
                }
            ]
        }
    },

    render: function() {
        console.log('Legacies props', this.props);
        return (
            <div className="legacies">
                <h2>Legacies</h2>
                <ul className="legacy-list">
                    {this.props.legacies.map(function(value) {
                        return <Legacy legacy={value.legacy} player={value.player} />
                    })}

                </ul>

            </div>
        )
    }
});

module.exports=Legacies;