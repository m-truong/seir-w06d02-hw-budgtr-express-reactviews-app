const React = require("react");
const Layout = require("./components/Layout.jsx");

class Show extends React.Component {
  render() {
    const budget = this.props.budget;
    return (
      <Layout>
        <h1>{budget.name}</h1>
        <ul>
          <li>{budget.date}</li>
          <li>{budget.from}</li>
          <li>{budget.amount}</li>
        </ul>
      </Layout>
    );
  }
}

module.exports = Show;
