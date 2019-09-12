var express = require('express');

var app = express();

var PORT = 8050;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

require('./app/routing/apiRoutes')(app);
require('./app/routing/htmlRoutes')(app);

app.listen(PORT, function() {
    console.log('App listening on port ' + PORT);
})