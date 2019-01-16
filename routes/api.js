const express = require('express');

const router = express.Router();

const Ninja = require('../models/ninja');

'## get list of ninjas from the database'
router.get('/ninjas', (req, res, next) => {
    // res.send({type: 'GET'});
    
    // Ninja.find({}).then((ninjas) => {
    //     res.send(ninjas);
    // });

    '## url parameters'
    // Ninja.geoNear(
    //     {type: 'point', coordinates: [parseFloat(req.query.lng), parseFloat(req.query.lat)]},
    //     {maxDistance: 100000, spherical: true}
    // ).then((data) => {
    //     res.send(data);
    // }).catch(next);

    // Ninja.geoSearch(
    //     {type: 'point'}, 
    //     {near: [parseFloat(req.query.lng), parseFloat(req.query.lat)], maxDistance: 100000}
    // ).then((data) => {
    //     res.send(data);
    // }).catch(next);
    
    // Ninja.geoSearch(
        //     {type: 'point'}, 
        //     {near: [parseFloat(req.query.lng), parseFloat(req.query.lat)], maxDistance: 100000},
        //     (err, data) => {
        //         res.send(data);
        //     }
        // )
            
            
    Ninja.aggregate().near({
        near: [parseFloat(req.query.lng), parseFloat(req.query.lat)],
        maxDistance: 100000,
        spherical: true,
        distanceField: "dist.calculated"
    }).then((data) => {
        res.send(data);
        // console.log(data);
    }).catch(next);

    // console.log(req.query.lng + req.query.lat);
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
    
});

'## delete ninja from database'
router.delete('/ninjas/:id', (req, res, next) => {

    Ninja.findByIdAndDelete({_id: req.params.id}).then((data) => {
        res.send(data);
    }).catch(next);

});

module.exports = router;

