var express = require('express')
var logger = require('morgan')
var cookieParser = require('cookie-parser')

var app = express()

// middlewares
app.use(logger('dev'))
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(express.static(__dirname + '/public'))

// routes
app.get('/', (req,res) => {
    res.sendFile(__dirname + '/index.html')
})
app.get('/users', (req,res) => {
    res.send('User Page')
})
app.get('/blog', (req,res) => {
    res.sendFile(__dirname + '/blog.html')
})


//error handling
app.use((req,res,next) => {
    res.send('Page Not Found!')
})
app.use((err,req,res) => {
    res.send(err)
})


app.listen(3000, () => {
    console.log('server listening on port 3000')
})

