const React = require("react");
const Layout = require("./components/Layout.jsx");

class Index extends React.Component {
  render() {
    return (
      <Layout>
        <div>
          <table style="width:100%">
            {this.props.budgetData.map((budget, index) => {
              return (
                <tr>
                  <td>Jill</td>
                  <td>Smith</td>
                  <td>50</td>
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
