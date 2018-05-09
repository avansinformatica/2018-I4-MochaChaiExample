const express     = require('express');

// Create the application
const app = express();

app.all('*', function(req, res, next){
    console.log( req.method + " " + req.url);
    next();
});

// Routing with versions
app.use('/apiv1', require('./routes/apiv1'));

// Start the server
var port = process.env.PORT || 8080;

app.listen(port, function() {
    console.log('The magic happens at http://localhost:' + port);
});


module.exports = app;