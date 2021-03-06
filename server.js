const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
var apiRoutes = require('./routes/apiRoutes');
var htmlRoutes = require('./routes/htmlRoutes');

//Express for data parcing 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

//Routes
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, function(){
    console.log(`Listening on PORT: ${PORT}`);
});