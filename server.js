var express = require('express');

var app = express();
app.use(express.static(__dirname+'/public'));

app.get('/interest_rate', function(req, res) {
  return res.json({interest_rate: Math.floor((Math.random()*1000)/10)/1000});
});

app.listen(8088);
