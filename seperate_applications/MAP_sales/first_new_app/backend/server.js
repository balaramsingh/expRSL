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

app.use('/sales',salesRouter);

app.listen(port, () => {
  console.log(`Server is running on port : ${port}`);
});
