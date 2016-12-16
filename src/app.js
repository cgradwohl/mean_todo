'use strict';


// import express
var express = require('express');


// create server instance
var app = express();


// static middleware to serve static files from public directory
// this serves our angular application from the public directory
app.use('/', express.static('public'));


app.listen(3000, function() {
    console.log('welcome creatures...');
});
