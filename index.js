var express = require('express');

var app = express();
var port = process.env.port || 8000;

app.get('/home', function (req, res) {
    res.send('Welcome to the DoubleStamp API!');
});

app.listen(port, function() {
    console.log('Starting on port ' + port);
})