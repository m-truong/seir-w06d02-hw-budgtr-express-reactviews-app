const React = require("react");
const Layout = require("./components/Layout.jsx");

class New extends React.Component {
  render() {
    return (
      <Layout>
        <h1>Create a New Budget Here</h1>
        {/* action=""directs data to the action-route method="POST" http-verb*/}
        {/* post and /fruits */}
        <form action="/budgets" method="POST">
          {/* name-attr identifies data key-value ; it's actually the 'key' associated with the input-data! */}
          Date: <input name="date" type="text"/> <br/>
          Name: <input name="name" type="text"/>
          <br/>
          {/* Needs to be camelCase */} 
          Amount: <input name="amount" type="text"/>
          <br/>
          From: <input name="from" type="text"/>
          <br/>
          {/* value adds placeholder text to button; then name is unneeded cause the button doesn't store data; but triggers submit*/}
          <input type="submit" name="" value="Create Budget"/>
        </form>
      </Layout>
    );
  }
}

module.exports = New;
