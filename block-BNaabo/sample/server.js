// writeCode

// Create a basic express server

// Q. Write code to add express.json middleware

// - send json data from postman using POST http method on '/json' route.
// - console.log(req.body) to see all json data in console on a POST route on '/json'.

// Q. Add express.urlencoded as middleware

// - send form data from postman on `/contact` route.
// - Access it using req.body on `/contact` route in our server

// Q. add express.static() as middleware

// - use `public` directory for static assets
// - Add images in public to
//   - public -> images -> img1.jpg
//   - public -> images -> img2.jpg
// - now request from browser on `/images/img1.jpg`
// - see whether img1.jpg is being served or not ?

// 2. Add css in public and check whether accessible or not.

var express = require('express');

var app = express();

app.use(express.json())

app.use(express.urlencoded({extended:false}))

app.use(express.static(__dirname + '/public'))

app.get('/', (req,res) => {
    res.sendFile(__dirname + '/index.html');
})

app.post('/json', (req,res) => {
    console.log(req.body);
})

app.post('/contact', (req,res) => {
    console.log(req.body);
})

app.listen(3000, () => {
    console.log('server listening on port 3000')
})