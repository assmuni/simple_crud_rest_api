const express = require('express');

const bodyParser = require('body-parser');

const mongoose = require('mongoose');

'## SETUP EXPRESS APP'
const app = express();

'## CONNECT TO LOCAL MONGO'
mongoose.connect('mongodb://localhost/portofolio', { useNewUrlParser: true });

'## USE MONGOS PROMISE'
mongoose.Promise = global.Promise;

'#0 load static file'
app.use(express.static('public'));

'#1 (MIDDLEWARE) INITIAL BODY PARSER IN JSON'
app.use(bodyParser.json());

'#2 (MIDDLEWARE) INITIAL ROUTES API.JS'
app.use('/api', require('./routes/api'));

'#3 (MIDDLEWARE) ERROR HANDLING'
app.use((err, req, res, next) => {
    // console.log(err);
    res.status(422).send({error: err.message});
});





// app.get('/',(req, res) => {
    //     res.send('hollaa');
    // });
    
const portNumber = 3000;
app.listen(process.env.port || portNumber, () => {
    console.log(`Is running cuy di localhost port ${portNumber}`);
})
