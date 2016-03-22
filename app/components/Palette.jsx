var React = require('react');
var Adds = require('./Adds.jsx');
var Bans = require('./Bans.jsx');

var Palette = React.createClass({
    getDefaultProps: function(){
       return {
               adds: [],
               bans: []
       };
    },

    render: function() {
        console.log("Palette", this.props);
        return (
            <div className="palette">
                <h2>Palette</h2>
                <Adds adds={this.props.adds} />
                <Bans bans={this.props.bans} />
            </div>
        );

    }
});

module.exports = Palette;