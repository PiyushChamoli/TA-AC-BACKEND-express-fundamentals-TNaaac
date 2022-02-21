// Q. Create a middleware which is similar to express.json()

// - parses json data and puts it into `req.body`

var express = require('express')
var app = express()

// middlewares
app.use((req,res,next) => {
    console.log(req.method,req.url,Date.now())
    next()
})

// routes
app.get('/', (req,res) => {
    res.send('Home Page')
})
app.get('/about', (req,res) => {
    res.send('About Page')
})


app.listen(3000, () => {
    console.log('server listening on port 3000')
})