var mysql  = require('mysql');

    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'transights'
    });

    connection.connect(function(err){
        if(!!err)
            console.log('Error');
        else
            console.log('Connnected');
    });

connection.query("SELECT * FROM Address", function(err, result){
    console.log(result);
});

var app = require('express')();
const cors = require('cors');

app.use(cors());

var port = process.env.PORT || 7777;

app.get('/address', function (req, res) {
    connection.query("SELECT * FROM address", function(err, result){
         res.send(result);
    });
});

app.get('/bts', function (req, res) {
    connection.query("SELECT * FROM btsstation", function(err, result){
        res.send(result);
    });
});

app.get('/place', function (req, res) {
    connection.query("SELECT * FROM btsStation NATURAL JOIN place", function(err, result){
        res.send(result);
    });
});

app.listen(port, function() {
    console.log('Starting node.js on port ' + port);
});