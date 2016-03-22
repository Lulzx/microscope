var React = require('react');

var Adds = React.createClass({
    getDefaultProps: function() {
        return { adds: [] };
    },

    render: function() {
        console.log("Adds", this.props);
        return (
            <div>
                <h3>Adds</h3>
                <ul className="adds">
                    {this.props.adds.map(function(value) {
                        return <li>{value}</li>;
                    })}

                </ul>
            </div>
        )
    }
});

module.exports = Adds;