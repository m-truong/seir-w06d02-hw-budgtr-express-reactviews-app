// =======================================
//              DEPENDENCIES
// =======================================
const express = require("express")
const app = express()
const PORT = 3000
const viewEngine = require("express-react-views").createEngine

// =====================================
//              MIDDLEWARE 
// =====================================
// View Engine
app.set("view engine", "jsx")
app.engine("jsx", viewEngine())

// uses bodyParser to get req.body
app.use(express.urlencoded({extended: false}))
// static-assets folder 
app.use(express.static('public'))

// =======================================
//              DATABASE
// =======================================
const budgetData = require('./models/budget.js')

// =======================================
//              ROUTES
// =======================================
// order of INDUCES important 

// INDEX-route
app.get('/', (req, res) => {
    // renders Index-JSX template
        // send this.props
    res.render('Index', {
        budgetData = budgetData
    })
})


// =======================================
//              LISTENER
// =======================================
app.listen(PORT, () => {
    console.log("listening...")
})