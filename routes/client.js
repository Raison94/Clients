var express = require('express');
var app = express();
var router = express.Router();

var Client = require('../models/client');


router.get('/client', function (req, res, next) {
    Client.find({}, function (err, client) {
        res.json(client);
    });

});

router.get('/client/:id', function (req, res) {
    Client.findById(req.params.id, function (err, client) {
        if (err) {
            throw err;
        }
        res.json(client);
    });
});

router.post('/client', function (req, res) {
    var client;
    client = req.body;

    Client.create(client
        , function (err, client) {
            if (err) {
                throw err;
            }
            res.json(client);
            console.log('hello client registred')
        });
});
router.put('/client/:id', function (req, res) {
    var id = req.params.id;
    var client=req.body;
    Client.findByIdAndUpdate(id, client, {}, function (err, client) {
        if (err) {
            throw err;
        }
        res.json(client);
    });
});

router.delete('/client/:id', function (req, res) {
    var id = req.params.id;
    Client.findByIdAndRemove(id, function (err, client) {
        if (err) {
            throw err;
        }
        res.json(client);
    });
});

module.exports=router