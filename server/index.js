const express = require('express');
const morgan = require('morgan');
const app = express();

const { mongoose } = require('./database');


//Settings
app.set('port', process.env.PORT || 3000);

//Middlewares
app.use(morgan('dev'));
app.use(express.json()); /*Para que el servidor reciba los datos en formato JSON*/ 

//Routes
app.use('/user', require('./routes/user.routes'))

//Starting server
app.listen(app.get('port'), ()=>{console.log('Server on port', app.get('port'));});