var React = require('react');

var Bans = React.createClass({
    getDefaultProps: function() {
        return { bans: [] };
    },

    render: function() {
        console.log("Bans", this.props);
        return (
            <div>
                <h3>Bans</h3>
                <ul className="bans">
                    {this.props.bans.map(function(value) {
                        return <li>{value}</li>;
                    })}

                </ul>
            </div>
        )
    }
});

module.exports = Bans;