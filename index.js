const express = require('express');

const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

// initial routes
app.use('/api', require('./routes/api'));

const portNumber = 3000;

// app.get('/',(req, res) => {
//     res.send('hollaa');
// });

// app.get('/api', (req, res) => {
//     res.send({name: 'azmi'});
// })



app.listen(process.env.port || portNumber, () => {
    console.log(`Is running cuy di localhost port ${portNumber}`);
})
