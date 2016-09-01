/**
 * Created by ykha on 8/31/16.
 */
var express = require('express');

var app = express();

app.disable('x-powered-by');

var handlebars = require('express-handlebars').create({defaultLayout: 'main'});




app.engine('handlebars', handlebars.engine);


app.set('view engine', 'handlebars');

app.set('port', process.env.PORT || 3333);

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    res.render('home');
});

app.get('/about', function(req, res) {
   res.render('about', {menu: 'yeah'});
});


app.listen(app.get('port'), function(){
    console.log('Express started on http://localhost:' +
        app.get('port') + '; press Ctrl-C to terminate');
});
