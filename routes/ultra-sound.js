var express = require('express');
var router = express.Router();

var UltraSound = require('../models/ultra-sound');


/* GET users listing. */
router.get('/', function(req, res, next) {
	res.send('respond with a resource');
})

router.post('/', function(req, res, next) {
	console.log(req.body)

	var ultraSound = new UltraSound();
	ultraSound.degree = req.body.degree;
	ultraSound.distance = req.body.distance;

	ultraSound.save(function(err) {
            if (err)
                res.send(err);
            
            res.json({ message: 'value created!' });
        });
});

module.exports = router;
