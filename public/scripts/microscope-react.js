var BigPicture = React.createClass({
    getInitialState: function() {
        return { bigPicture: 'The Big Picture' };
    },

    render: function() {
        return (
            <h1 className="big-picture">{this.props.bigPicture}</h1>
        );
    }
});

ReactDOM.render(
    <BigPicture bigPicture="I have no idea" />,
    document.getElementById('content')
);