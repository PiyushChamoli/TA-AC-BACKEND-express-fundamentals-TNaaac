var express = require('express')
var logger = require('morgan')
var cookieParser = require('cookie-parser')

var app = express()

app.use(logger('dev'))

app.use(cookieParser())

app.get('/',(req,res,next) => {
    res.send('3rd Part Middleware')
    next()
})

app.use((req,res,next) => {
    console.log(req.cookies)
    next()
})

app.get('/about', (req,res,next) => {
    res.cookie('username','piyush')
    res.end('About Page')
    next()
})

app.listen(3000, () => {
    console.log('server listening on port 3000')
})