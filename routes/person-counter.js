var express = require('express');
var router = express.Router();

var PersonCounter = require('../models/person-counter');


/* GET users listing. */
router.get('/', function(req, res, next) {
	res.send('respond with a resource');
})

router.post('/', function(req, res, next) {
	console.log(req.body)

	var personCounter = new PersonCounter();
	personCounter.value = req.body.value;
	db.collection('all').updateOne(
      	{ "_id" : "57b7ffe5de9c32aa509ef344" },
      	{
        	$set: { "value": 2 }
    	}, function(err, results) {
		console.log(results);
   	});

	personCounter.save(function(err) {
            if (err)
                res.send(err);

            res.json({ message: 'value created!' });
        });
});

module.exports = router;
