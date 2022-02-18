// - create a custom app level middleware which consoles request `url` and `method` and passes executio to next middleware in line.

var express = require('express');

var app = express();

app.use((req,res,next) => {
    console.log(req.method,req.url);
    next()
})

app.get('/',(req,res) => {
    res.send('Application Level Middleware')
})

app.listen(4000,() => {
    console.log('server listening on port 4000')
})