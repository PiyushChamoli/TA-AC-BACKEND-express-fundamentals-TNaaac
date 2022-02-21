
// - to capture form data from request
// - to capture json data from request
// - add POST request on `/form` route to capture form data from postman and send entire form data through response in json format
// - add POST request on `/json` route to capture JSON data from postman and send entire data in response in plain text format.
// - json and form data should include fields
//   - name
//   - age
//   - email

// ### Note:-

// Remember to add middlewares before handling any routes.

// Q. Modify above application to include

// - logger middleware
// - cookieParser middleware
// - add a middleware to send cookie to the client.

// Q. Modify above application to include

// - a router to capture params from the request on a route `/users/:username` using GET request.
// - capture the username and respond with username in HTML response.

// Q. Modify above to include error handler middleware

// - a 404 handler for routes which are not handled
// - a 500 handler for client/server error

// ### Note:-

// Remember to add error handler middlewares after handling all the routes in the application


var express = require('express')
var logger = require('morgan')
var cookieParser = require('cookie-parser')

var app = express()

// middlewares
app.use(logger('dev'))
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({extended:false}))

// routes
app.get('/', (req,res) => {
    res.send(`<h2>Welcome To Express</h2>`)
})
app.get('/about', (req,res) => {
    res.cookie('cookieName','allIsWell')
    res.send('My name is qwerty')
})
app.post('/form', (req,res) => {
    res.json(req.body)
})
app.post('/json', (req,res) => {
    res.send(req.body)
})
app.get('/users/:username', (req,res) => {
    res.send(req.params.username)
})


// error handling
app.use((req,res) => {
    res.status(400).send('PAGE NOT FOUND')
})
app.use((err,req,res) => {
    res.status(500).send('Incorrect Information')
})

app.listen(3000, () => {
    console.log('server listening on port 3000')
})