var express = require('express');
var router = express.Router();

var PersonCounter = require('../models/person-counter');


/* GET users listing. */
router.get('/', function(req, res, next) {
	PersonCounter.find(function(err, values) {
            if (err)
                res.send(err);

            res.json(values);
    });
})

router.post('/', function(req, res, next) {
	console.log(req.body)

	var personCounter = new PersonCounter();
	personCounter.value = req.body.value;

	personCounter.save(function(err) {
            if (err)
                res.send(err);

            res.json({ message: 'value created!' });
        });
});

module.exports = router;
