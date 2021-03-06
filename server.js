var express = require('express');

//make app
var app = express();
const PORT = process.env.PORT || 3000;

app.use(function (request, response, next) {
    if (request.headers['x-forwarded-proto'] === 'http') {
        next();
    }
    else{
        response.redirect('http://' + request.hostname + request.url);
    }
});

app.use(express.static('public'));

app.listen(PORT, function(){
    console.log('express server is up on port ' + PORT);
});