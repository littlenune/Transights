const mysql  = require('mysql');

    const connection = mysql.createConnection({
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

const app = require('express')();
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

const port = process.env.PORT || 7777;

let go = 'ready';
let searchData = 'ready';
let sendUser = 'ready';
let tp = 'ready';
let p = 'ready';

app.post('/selectStation', function(req, res) {
    station = req.body.stationName;
    connection.query('SELECT * FROM btsStation NATURAL JOIN place WHERE stationName = "' + station + '"', function(err, result) {
        res.send(result);
        go = result;
    })  
})

app.post('/search', function(req, res) {
    value = req.body.searchVal;
    console.log(value)
    connection.query('SELECT * FROM btsStation NATURAL JOIN place WHERE PlaceName IN (   SELECT PlaceName FROM place WHERE place.PlaceName LIKE "%' + value + '%" UNION ( SELECT place.PlaceName FROM place WHERE place.stationID IN ( SELECT btsstation.stationID FROM btsstation WHERE btsstation.stationName LIKE "%' + value + '%")))', 
    function(err, result) {
        res.send(result);
        searchData = result;
        console.log("searchResult : "+ result);
    })
})

app.post('/user',function(req,res) {
    username = req.body.username;
    connection.query('SELECT * FROM user WHERE userName = "'+ username + '"', function(err,result) {
        res.send(result);
        sendUser = result;
    })
})

app.post('/regisUser',function(req,res) {
    var user = {userID:req.body.name, userName:req.body.username, password:req.body.password, name:req.body.name, lastname:req.body.lastname};
        connection.query('INSERT INTO user SET ?',user,function(err,res) {
          if (err) throw err;      
        });
})

app.post('/time', function(req,res) {
    let dept = req.body.dept;
    let arri = req.body.arri;
    connection.query('SELECT t2.time, t2.stationID as arri , price.station as dept  FROM price, ((time as t1 NATURAL JOIN btsstation as b1) CROSS JOIN (time as t2 NATURAL JOIN btsstation as b2)) WHERE b1.stationName = "' + dept + '" and b2.stationName = "' + arri + '" AND price.station = t1.stationID' , function(err, result) {
        res.send(result);
        tp = result;
    })
})

app.post('/price', (req, res) => {
    let dept = req.body.dept;
    let arri = req.body.arri;
    console.log('post price' + dept + " " + arri )
    connection.query('SELECT price.' + arri + ' as pc FROM price WHERE price.station = "' + dept + '"', (err, result) => {
        res.send(result);
        p = result;
    })
    
})

app.get('/price', (req, res) => {
    res.json(p);
})


app.get('/time', function(req,res) {
    res.json(tp);
})

app.get('/user', (req,res) => {
    res.json(sendUser);
})

app.get('/selectStation', (req, res) => {
    res.json(go);
})

app.get('/search', (req, res) => {
    res.json(searchData);
})

app.get('/login', function(req,res) {
    connection.query("SELECT * FROM user",function(err,result){
        res.send(result);
    });
})

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
    connection.query("SELECT * , AVG(review.Rate) as avgRate FROM review NATURAL JOIN btsstation NATURAL JOIN place  GROUP BY placeID ORDER BY avgRate DESC ", function(err, result){
        res.send(result);
    });  
});

app.listen(port, function() {
    console.log('Starting node.js on port ' + port);
});
