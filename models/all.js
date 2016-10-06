var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var AllSchema   = new Schema({
    cards : {
    	type : Array,
    }
},{
    	timestamps : false
});

module.exports = mongoose.model('All', AllSchema);