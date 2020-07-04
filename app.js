const express = require("express");
// importing routes
const Routes = require('./routes/home');
const app = express();


app.set('views', './views/pages');
app.set('view engine', 'ejs');

app.use('/public', express.static('./public')); 


app.use('/', Routes);

//Server
var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log('Server running on port: %d', port);
});