'use strict'


var express = require('express');
var router = express.Router();


router.get('/todos', function(req, res) {
    // here the send method sends a string to be rendered as text/html on response
    // res.send('hello! here go the todos');

    // here we tell our api to send json objects ( both are equivalent )
    // res.send({todos:[]});
    res.json({todos:[]});
});

// TODO: Add POST route to create new entry

// TODO: Add PUT route to update existing entries

// TODO: Add DELETE route to delete todo
module.exports = router;
