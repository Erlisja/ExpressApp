// importing the   express module
const express = require('express');
const app = express();
const PORT = 3000;

// import the body-parser
const bodyParser = require('body-parser');
// import the routes
const routes = require('./routes');
// use the routes
app.use('/', routes);

























// listen to the port
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});