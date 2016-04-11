var React = require('react'),
ReactDOM = require('react-dom');

var Main = React.createClass({
  render: function() {
    return (
      <div>
        Hello World from React
      </div>
    );
  }
});

ReactDOM.render(<main/>, document.getElementById('app'));
