const express = require('express');

const router = express.Router();

const Ninja = require('../models/ninja');

'## get list of ninjas from the database'
router.get('/ninjas', (req, res, next) => {
    res.send({type: 'GET'});
});

'## post a new ninjas to the database'
router.post('/ninjas', (req, res, next) => {
    // console.log(req.body);
    // res.send(req.body);

    // var ninja = new Ninja(req.body);
    // ninja.save();

    Ninja.create(req.body).then((data) => {
        res.send(data);
    }).catch(next);

});

'## put a ninja to database'
router.put('/ninjas/:id', (req, res, next) => {

    Ninja.findByIdAndUpdate({_id: req.params.id}, req.body).then(() => {
        Ninja.findOne({ _id: req.params.id }).then((data) => {
            res.send(data);
        });
    }).catch(next);

    // res.send({type: 'PUT'});
});

'## delete ninja from database'
router.delete('/ninjas/:id', (req, res, next) => {

    Ninja.findByIdAndDelete({_id: req.params.id}).then((data) => {
        res.send(data);
    }).catch(next);

});

module.exports = router;

