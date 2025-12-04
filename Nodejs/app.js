var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;

//GET ilman parametrejä
app.get('/get',
    function(request,response){
        response.send('GET esimerkki');
        console.log('GET esimerkki');
    }
);

//Middleware 1
app.use(
    function(req,res,next){
        console.log('The common middleware 1 called');
        next();
    }
);

//GET yhdellä parametrillä
app.get('/get/:input',
    function(request,response){
        response.send('GET 1 parametri. Annoit: '+request.params.input);
        console.log('GET 1 parametri. Annoit: '+request.params.input);
    }
);

//Middleware 2
app.use(
    function(req,res,next){
        console.log('The common middleware 2 called');
        next();
    }
);

//GET kahdella parametrillä
app.get('/get/:input1/:input2',
    function(request,response){
        response.send('GET 2 parametria. Annoit: '+request.params.input1+" ja "+request.params.input2);
        console.log('GET 2 parametria. Annoit: '+request.params.input1+" ja "+request.params.input2);
    }
);

//Postman
app.post('/',
    function(request,response){
        response.send(request.body);
        console.log(request.body);
    }
);