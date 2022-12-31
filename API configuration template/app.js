const express = require("express"); //import the express module which is a web application framework in Node.js
const bodyParser = require("body-parser"); //import the body parser module which acts as middleware for parsing request bodies.

const app = express(); //creates an express application

app.use(bodyParser.urlencoded({extended: true})); // used to parse the request body of incoming POST requests with URL-encoded form data

app.set('view engine', 'ejs'); //to use EJS with Express , assumes a "views" directory is present and contains the index.ejs file

app.get('/', function(req,res){   //define a route for an HTTP get request to the root path '/'
  res.send("Hello") //when a root path is requested , an anonymous function is executed and a response "Hello" is sent
});

app.post('/', function(req,res){ //set up a route handler for an HTT POST request which receives a form submission with a username field
  req.body.username //retrieves the value of the username field from the request body
})

app.listen(3000, function(){ //start the server and listen to incoming requests on the specified port '3000'
  console.log("Server is running on port 3000")
});
