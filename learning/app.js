var express = require('express');
var app = express();
var routes = require('./routes');

app.set('view engine', 'ejs');

// global variable yg dpt digunakan oleh semua template
app.locals.pagetitle = "Awesome Website";

// bila view berada di directory lain selain views
// app.set('views', dirname + '/views');

// sudah dipindahkan ke file routes tersendiri
// app.get('/', function(req, res){
//     // res.send("<b>Hello</b> from Express");
//     res.render('default', {
//         title: 'Home',
//         classname: 'home',
//         users: ['Ray', 'Morten', 'Diaz']
//     });
// });

// app.get('/about', function(req, res){
//     // res.send("@diazinmotion");
//     res.render('default', {
//         title: 'About',
//         classname: 'about'
//     });
// });

// app.get('/who/:name?', function(req, res){
//     var name = req.params.name;
//     res.send(name + " was here");
// });

// app.get('/who/:name?/:title?', function(req, res){
//     var name = req.params.name;
//     var title = req.params.title;
//     res.send('<p>Name: '+ name + " <br/>Title: " + title + '</p>');
// });

app.get('/', routes.index);
app.get('/about', routes.about);

app.get('*', function(req, res){
    var name = req.params.name;
    var title = req.params.title;
    res.send('Bad Route');
});

var server = app.listen(3000, function(){
    console.log("Server started!");
});