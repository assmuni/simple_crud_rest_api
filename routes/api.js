const express = require('express');

const router = express.Router();

// get list of ninjas from the database
router.get('/ninjas', (req, res) => {
    res.send({type: 'GET'});
});

// post a new ninjas to the database
router.post('/ninjas', (req, res) => {
    res.send({
        type: 'POST',
        name: req.body.name,
        rank: req.body.rank
    });
});

// put a ninja to database
router.put('/ninjas/:id', (req, res) => {
    res.send({type: 'PUT'});
});

// delete ninja from database
router.delete('/ninjas/:id', (req, res) => {
    res.send({type: 'DELETE'});
});

module.exports = router;

