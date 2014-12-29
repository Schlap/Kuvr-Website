var express = require('express');
var app = express();
var ejs = require('ejs');

app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
  res.render('index');
});

app.listen(process.env.PORT || 3000);
console.log('listening to port 3000');
