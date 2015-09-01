var express = require('express');
var app = new express();

app.get('/', function(req,res) {
    res.render('./../app/index.ejs')
});
app.use(express.static(__dirname + '/../.tmp'));

app.listen(8008);