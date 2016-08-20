var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var AllSchema   = new Schema({
    value : {
    	type : Number,
    },
    humidity :{
    	type : Number,    	
    },
    temperature : {
    	type : Number,
    },
    degree : {
    	type : Number,
    },
    distance : {
    	type : Number
    }
},{
    	timestamps : false
});

module.exports = mongoose.model('All', AllSchema);