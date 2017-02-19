var path = require('path');
var express = require('express');
var mysql = require("mysql");
var bodyParser = require('body-parser');
var app = express();
var PORT = process.env.PORT || 8080

// using webpack-dev-server and middleware in development environment
if(process.env.NODE_ENV !== 'production') {
    var webpackDevMiddleware = require('webpack-dev-middleware');
    var webpackHotMiddleware = require('webpack-hot-middleware');
    var webpack = require('webpack');
    var config = require('./webpack.config');
    var compiler = webpack(config);

    app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }));
    app.use(webpackHotMiddleware(compiler));
}

app.use(express.static(path.join(__dirname, 'dist')));

var connection = mysql.createConnection({
    // config
    host: '127.0.0.1',
    user: 'root',
    password: 'root',
    database: 'contacts-app'
});

connection.connect(function(error){
    if (error) {
        console.log("error...")
    } else {
        console.log("connected to mysql")
    }
});

app.use(bodyParser.json())

app.get('/api/data', function(request, response) {
    connection.query("SELECT * FROM contacts", function(error, rows, field){
        if (error) {
            console.log(error)
        } else {
            response.send(rows)
        }
    });
});

app.post('/api/add-contact', function(request, response) {

    var jsondata = request.body;
    var values = [];

    values.push([jsondata.id, jsondata.name, jsondata.phone, jsondata.gender, jsondata.email]);

    //Bulk insert using nested array [ [a,b],[c,d] ] will be flattened to (a,b),(c,d)
    connection.query('INSERT INTO contacts (id, name, phone, gender, email) VALUES ?', [values], function(err,result) {
        if(err) {
            response.send('Error');
        }
        else {
            response.send('Success');
        }
    });
});

app.post('/api/remove-contact', function(request, response){

    var jsondata = request.body.id;

    connection.query('DELETE FROM contacts WHERE id= ?', [jsondata], function(err, result) {
        console.log(err)
        if (err) {
            response.send('Error');
        } else {
            response.send('Success');
        }
    });

});

app.listen(PORT, function(error) {
    if (error) {
        console.error(error);
    } else {
        console.info("==> Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
    }
});