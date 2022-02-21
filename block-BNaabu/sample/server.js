// Create a basic server using express and handle 2 routes

// - GET request on '/'
// - GET request on '/about'

// - create a error handler middleware which should be able to throw 404 (page not found) error when a request is made on any other route which does not match above 2 routes.

var express = require('express')
var logger = require('morgan')
var cookieParser = require('cookie-parser')

var app = express()

// Middlewares
app.use(logger('dev'))
app.use((req,res,next) => {
    if(req.url === '/admin') {
        return next('Unauthorized')
    }
    next()
})

// Routes
app.get('/', (req,res) => {
    res.send('Home Page')
})
app.get('/about', (req,res) => {
    res.send('About Page')
})

//Error Handling
app.use((req,res,next) => {
    res.send('Page Not Found!')
})
app.use((err,req,res,next) => {
    console.log(err)
    res.send(err)
})

app.listen(3000, () => {
    console.log('server listening on port 3000')
})