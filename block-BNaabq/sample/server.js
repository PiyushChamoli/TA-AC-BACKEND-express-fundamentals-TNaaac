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

app.get('/about', (req,res,next) => {
    console.log(req.cookies)
    res.cookie('username','piyush')
    next()
})

app.listen(3000, () => {
    console.log('server listening on port 3000')
})