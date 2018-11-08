var mongoose = require('mongoose');
const uri = "mongodb://kevin:kevinp5@ds155263.mlab.com:55263/kevinsdb";
let db = mongoose.createConnection(uri);

var schema = mongoose.Schema({ name: 'string' });
var Item = db.model('Item', schema);

module.exports = Item;
