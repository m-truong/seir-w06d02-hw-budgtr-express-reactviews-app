const React = require("react");

class Layout extends React.Component {
  render() {
    return (
      <html>
        <head>
          <title>Budgtr App</title>
          <link rel="stylesheet" href="/css/style.css" />
        </head>
        <body>
          <h1>Budgtr App</h1>
          <a href="/budgets">Home</a>
          <br />
          <a href="/budgets/new">Create a new budget</a>
          {this.props.children}
        </body>
      </html>
    );
  }
}

module.exports = Layout;
