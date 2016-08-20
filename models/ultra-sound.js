var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var UltraSoundSchema   = new Schema({
    degree : {
    	type : Number,
        required : true,
    },
    distance : {
    	type : Number,
        required : true,
    }
},{
    	timestamps : false
});

module.exports = mongoose.model('UltraSound', UltraSoundSchema);