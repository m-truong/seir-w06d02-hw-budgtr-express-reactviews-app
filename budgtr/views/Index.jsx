const React = require("react");
const Layout = require("./components/Layout.jsx");

class Index extends React.Component {
  render() {
      const budgetsArr = this.props.budgetsArr
    return (
      <Layout>
        <div>
          <table>
            {budgetsArr.map((currBudget, index) => {
              return (
                <tr>
                  <td>{currBudget.date}</td>
                  <td>{currBudget.name}</td>
                  <td>{currBudget.from}</td>
                  <td>{currBudget.amount}</td>
                </tr>
              );
            })}
          </table>
        </div>
      </Layout>
    );
  }
}

module.exports = Index;
