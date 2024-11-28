// importing the   express module
const express = require('express');
// import routes

const app = express();
const PORT = 3000;
// method overide is used to ba abele to do more than GET an POST
const methodOverride = require('method-override');
// import the middleware logger
const logger = require('./middleware/logger');

const jsxViewEngine = require('jsx-view-engine'); // import the jsx view engine
app.set('view engine','jsx');   // this tells the app that we are using jsx view engine
app.set('views','./views');     // this tells the app where to find the views
app.engine('jsx',jsxViewEngine());  // this tells the app that we are using jsx view engine
// import the body-parser
const bodyParser = require('body-parser');

app.use(methodOverride('_method'));
app.use(express.static('public'));


//==== Middleware Use=====
app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(logger);

const indexRouter = require('./routes/indexRouter');
const carsRouter = require('./routes/carsRouter');


// use the routes
app.use('/api',indexRouter);
app.use('/api',carsRouter);



// listen to the port
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});