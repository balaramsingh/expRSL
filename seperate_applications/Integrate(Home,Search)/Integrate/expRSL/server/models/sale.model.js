const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const saleSchema = new Schema({
  ownername: { type: String, required: true},
  sale_type : { type: String, required:true},
  purpose : {type: String, required: true},
  price : {type: Number, required: true},
  location : {type:String, required: true},
  latitude : {type:String, required: true},
  longitude: {type:String, required: true},
  sale_image: {
        type: String,
        required: true
    }
});

const Sale = mongoose.model('Sale',saleSchema);

module.exports = Sale;
