var express = require('express');
var app = new express();
var React = require('react/addons');

require('babel/register');


app.get('/', function(req,res) {

    var application = React.createFactory(require('./../app/components/GroceryItemList.jsx'));

    // Pre compile application data ahead of time
    var generated = React.renderToString(application({
        items:[
            {name:"Cheese"},
            {name:"Bacon"},
            {name:"Milk", purchased:true}
        ]
    }));

    //ES6 variables!
    res.render('./../app/index.ejs', {reactOutput:"swagggg"});
});
app.use(express.static(__dirname + '/../.tmp'));

app.listen(8008);