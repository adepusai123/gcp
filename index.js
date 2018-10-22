const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(logger('dev'));
app.use(bodyParser.json({}));
app.use(bodyParser.json({type: 'application/json'})); 
app.use(bodyParser.text());

app.get('/',(req,res)=>{
	res.status(200).send('Hello World ! Welcome to Google Cloud Platform !');
});

app.get('/user',(req,res)=>{
	res.status(200).send('Hi User ! We are happy to help you in GCP.');
});

app.use((req,res,next)=>{
	res.status(404).send('ERROR 404 ! PAGE NOT FOUND');
});

app.use((req,res,next)=>{
	res.status(err.status || 500).send("<h2>ERROR 500 ! INTERNAL ERROR.</h2><p>"+err+"</p>");
});

var server = app.listen(process.env.PORT || 8580 ,(err)=>{
	console.log(err ?  err : 'Server running on PORT : ' ,  server.address().port);
});

module.exports = app;