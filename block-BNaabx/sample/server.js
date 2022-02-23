var express = require('express')
var app = express()

// middlewares

// logger
app.use((req, res, next) => {
    console.log(`${req.method} ${req.path} ${res.statusCode}`);
    next();
})

// json and urlencoded handler
app.use((req,res,next) => {
    req.body = {}
    var data = ''
    req.on('data', (chunk) => {
        data += chunk.toString()
    })
    req.on('end', () => {
        if(!data) return next()

        //json handler
        if (data && req.headers["content-type"] === "application/json") {
            data = JSON.parse(data);
            req.body = {...data}
        }

        //urlencoded handler
        if (data && req.headers["content-type"] === "application/x-www-form-urlencoded") {
            req.body = {...parse(data)}
        }
    })
})

// Static Assets Middleware
var publicPath = __dirname + "/public";

app.use((req, res, next) => {
  var filePath = publicPath + req.path;
  fs.readFile(filePath, "utf8", (err, file) => {
    if (err) return next();
    res.sendFile(filePath);
  });
});

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