// Create a basic express server and add routes:-

// - Add a GET request on '/' route and render 'index.html' file using `res.sendFile`.
// - Add a GET request on '/new' route and render new.html with a html form.
// - add a post request on '/new' route and display submitted form data
// - add a route with params to grab request made on `/users/1234` or `/users/asdf`

var express = require("express")
var logger = require("morgan")
var cookieParser = require("cookie-parser")

var app = express()


// Middleware
app.use(logger('dev'))
app.use(express.urlencoded({extended:false}))

// Routes
app.get('/', (req,res) => {
    res.sendFile(__dirname + '/index.html')
})
app.get('/new', (req,res) => {
    res.sendFile(__dirname + '/new.html')    
})
app.get('/users/:data', (req,res) => {
    var data = req.params.data
    res.send(data)
})
app.post('/new', (req,res) => {
    console.log(req.body)
    res.json(req.body)
})


app.listen(3000,() => {
    console.log('server listening onport 3000')
})