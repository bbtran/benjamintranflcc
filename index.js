var express = require('express');
var app = express();

app.use(express.static(__dirname+'/client'));
app.set('port', (process.env.PORT) || 8080);
app.listen(app.get('port'), function(){
  console.log('Listening on port 8080');
});
