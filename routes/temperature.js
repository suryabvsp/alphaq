var express = require('express');
var router = express.Router();

var Temperature = require('../models/temperature');


/* GET users listing. */
router.get('/', function(req, res, next) {
		Temperature.find(function(err, values) {
            if (err)
                res.send(err);

            res.json(values);
    });
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
