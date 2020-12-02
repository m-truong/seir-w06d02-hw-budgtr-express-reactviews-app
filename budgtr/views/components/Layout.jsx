const React = require('react')

class Layout extends React.Component {
    render() {
        return (
            <html>
                <head>
                <title>Budgtr App</title>
                <link rel="stylesheet" href="/css/style.css"/>
                </head>
                <body>
                    <h1>Budgtr App</h1>
                    {this.props.children}
                </body>
            </html>
        )
    }
}

module.exports = Layout