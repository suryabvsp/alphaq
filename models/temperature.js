var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var TemperatureSchema   = new Schema({
    humidity :{
    	type : Number,
        required : true,    	
    },
    temperature : {
    	type : Number,
        required : true,
    }
},{
    	timestamps : false
});

module.exports = mongoose.model('Temperature', TemperatureSchema);