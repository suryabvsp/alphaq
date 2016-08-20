var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var PersonCounterSchema   = new Schema({
    value : {
    	type : String,
    	required : true,
    }},{
    	timestamps : true
});

module.exports = mongoose.model('PersonCounter', PersonCounterSchema);