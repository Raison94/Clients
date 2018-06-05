var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for Clients
var Client = new Schema({
  name: {
    type: String
  },
  email: {
    type: String
  },
  
    phone:{
      type:String
      },
  
    provider:{
      type:String
    }
},
{
	collection: 'clients'
});

module.exports = mongoose.model('clients', Client);
