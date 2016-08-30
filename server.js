var express = require('express');
var path = require('path');
var fs = require('fs');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/users', function(req,res) {
  var list = fs.readFileSync('public/list').toString();
  res.send(list);
});

app.post('/users', function(req,res) {
  var id = req.body.id;
  var name = req.body.name;
});

app.get('/users/:id', function(req,res) {
  var id = req.params.id;
  var list = fs.readFileSync('public/list').toString();
  list = JSON.parse(list);
  var picked = list.filter(function(value){ return value.id == id ? value : null;});

  res.send(picked);
});


app.listen(3000);
