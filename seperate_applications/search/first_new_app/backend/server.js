const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 4000 ;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri,{ useNewUrlParser: true , useCreateIndex: true,useUnifiedTopology: true});

const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established succesfully ");
})

const salesRouter = require('./routes/sales');
//const searchRouter = require('./routes/search');
app.use('/sales',salesRouter);
//app.use('/search',searchRouter);





let model = require("./models/sale.model");
app.post("/search",function(req, res) {
  model.find({
    $or: [
      
      {ownername:req.body.user},
      {purpose:req.body.option1},
      {purpose:req.body.option2},
      {purpose:req.body.option3},
      {ownername:req.body.user},
      {sale_type:req.body.option4},
      {sale_type:req.body.option5},
      {sale_type:req.body.option6},
      { price: { $lt:req.body.option7}} ,
    ]
  })
  
    .then(sales=>res.json(sales))
    .catch(err=>res.status(400).json('Error : '+err));
})
app.listen(port, () => {
  console.log(`Server is running on port : ${port}`);
});
