// import { createServer } from 'http';
let http = require('http');
let web3 = require('web3');
let express = require('express')
let bodyParser = require('body-parser')

let app = express();

//var web3_server = new Web3(Web3.givenProvider || "ws://localhost:6969");
var urlencodedParser = bodyParser.urlencoded({ extended: false })
let newRequest;

app.listen(8000);

/* Middleware & Static Files */
app.set('view engine', 'ejs');
app.use('/css', express.static('css'));
app.use('/css', express.static('../'));
app.use('/Assets', express.static('Assets'));
app.use('/fonts', express.static('fonts'));
app.use('/vendor', express.static('vendor'));
app.use('/js', express.static('js'));


app.get(['/index.html', '/'], function(request, response){
    response.sendFile(__dirname + '/index.html');
});

app.post('/index.html', urlencodedParser, function(request, response){
    response.sendFile(__dirname + '/landing.html');
});

app.get(['/landing.html', '/home.html'], function(request, response){
    response.sendFile(__dirname + '/landing.html');
});

app.post('/home', urlencodedParser, function(request, response){
    console.log(request.body);
    newRequest += urlencodedParser;
    response.sendFile(__dirname + '/landing.html');
});

app.get(['/shop.html'], function(request, response){
    response.render('../shop');
});

app.get('/history.html', function(request, response){
    response.render('../History');
});

console.log('we out dea');
