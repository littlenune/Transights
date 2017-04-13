var mysql  = require('mysql');

    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'sightseeing'
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
    connection.query("SELECT * FROM Address", function(err, result){
         res.send(result);
    });
});

app.listen(port, function() {
    console.log('Starting node.js on port ' + port);
});