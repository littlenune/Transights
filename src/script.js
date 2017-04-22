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
let sendUser = 'ready';
let tp = 'ready';

app.post('/searchplace', function(req, res) {
    station = req.body.stationName;
    connection.query('SELECT * FROM btsStation NATURAL JOIN place WHERE stationName = "' + station + '"', function(err, result) {
        res.send(result);
        go = result;
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

app.post('/timeandprice', function(req,res) {
    dept = req.body.dept;
    arri = req.body.arri;
    connection.query('SELECT price.'+ arri + ' as price , timetable.'+ arri +' as time FROM price , timetable WHERE price.station = "' + dept +'" and timetable.station = "'+ dept + '"' , function(err, result) {
       
        res.send(result);
        tp = result;
    })
})


app.get('/timeandprice', function(req,res) {
    res.json(tp);
})

app.get('/user', (req,res) => {
    res.json(sendUser);
})

app.get('/searchplace', (req, res) => {
    res.json(go);
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
    connection.query("SELECT * FROM btsStation NATURAL JOIN place", function(err, result){
        res.send(result);
    });  
});


app.listen(port, function() {
    console.log('Starting node.js on port ' + port);
});
