var express = require('express');
var router = express.Router();

var Temperature = require('../models/temperature');


/* GET users listing. */
router.get('/', function(req, res, next) {
	res.send('respond with a resource');
})

router.post('/', function(req, res, next) {
	console.log(req.body)

	var temperature = new Temperature();
	temperature.temperature = req.body.temperature;
	temperature.humidity = req.body.humidity;

	temperature.save(function(err) {
            if (err)
                res.send(err);
            
            res.json({ message: 'value created!' });
        });
});

module.exports = router;
