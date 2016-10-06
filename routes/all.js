var express = require('express');
var router = express.Router();

var All = require('../models/All');

/* GET users listing. */
router.get('/', function(req, res, next) {
	All.find(function(err, values) {
            if (err)
                res.send(err);

            res.json(values);
    });
})

router.post('/', function(req, res, next) {
	console.log(req.body)

	var all = new All();
	all.cards = req.body.cards;

	all.save(function(err) {
            if (err)
                res.send(err);

            res.json({ message: 'value created!' });
        });
});

module.exports = router;
