const router = require('express').Router();
var request = require("request");
const multer = require('multer');
const mongoose = require('mongoose');
const uuidv4 = require('uuid/v4');

const DIR = './public/';
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, DIR);
    },
    filename: (req, file, cb) => {
        const fileName = file.originalname.toLowerCase().split(' ').join('-');
        cb(null, uuidv4() + '-' + fileName)
    }
});

var upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
            cb(null, true);
        } else {
            cb(null, false);
            return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
        }
    }
});
// Using callback

let Sale = require('../models/sale.model');

router.route('/').get((req,res) => {
  Sale.find()
    .then(sales=>res.json(sales))
    .catch(err=>res.status(400).json('Error : '+err));
});

router.route('/add').post(upload.single('sale_image'),(req,res) => {

  const location = req.body.location;
  var lat_api = "";
  var lng_api = "";
  // API start
  var API_KEY = "AIzaSyAqazsw3wPSSxOFVmij32C_LIhBSuyUNi8";
  var BASE_URL = "https://maps.googleapis.com/maps/api/geocode/json?address=";

  var address = location;

  var url = BASE_URL + address + "&key=" + API_KEY;
  var answer_ = []
  var request_ = []
  request(url, function (error, response, body) {

        if (!error && response.statusCode == 200) {
            answer_ = JSON.parse(response.body);

            request_ = req.file ;
            const ownername = req.body.ownername;
            const sale_type = req.body.sale_type;
            const purpose = req.body.purpose;
            const price = Number(req.body.price);
            const sale_image = request_.filename;
            const latitude = String(answer_.results[0].geometry.location.lat);
            const longitude = String(answer_.results[0].geometry.location.lng);
            const newSale = new Sale({
              ownername,
              sale_type,
              purpose,
              price,
              location,
              latitude,
              longitude,
              sale_image,
            });
            // console.log(newSale);
          newSale.save()
          .then(()=>res.json('Sale addedd!'))
          .catch(err=>res.status(400).json('Error : '+err));
        }
        else {
            // The request failed, handle it
        }
    });
    // API end


});

router.route('/:id').get((req,res) => {
  Sale.findById(req.params.id)
  .then(sale=>res.json(sale))
  .catch(err=>res.status(400).json('Error : '+err));
});

router.route('/:id').delete((req,res) => {
  Sale.findByIdAndDelete(req.params.id)
  .then(()=>res.json('Sale deleted '))
  .catch(err=>res.status(400).json('Error : '+err));
});

router.route('/saleowner/:name').get((req,res) => {
  const query = { ownername :  req.params.name  };
  Sale.find(query)
  .then(sale=>res.json(sale))
  .catch(err=>res.status(400).json('Error : '+err));
});

router.route('/saleownerNOT/:name').get((req,res) => {
  const query = { ownername :{ $ne :  req.params.name } };
  Sale.find(query)
  .then(sale=>res.json(sale))
  .catch(err=>res.status(400).json('Error : '+err));
});

router.route('/update/:id').post((req,res) => {
  Sale.findById(req.params.id)
  .then( sale => {
    sale.ownername = req.body.ownername;
    sale.sale_type = req.body.sale_type;
    sale.purpose = req.body.purpose;
    sale.price = Number(req.body.price);
    sale.location = req.body.location;

    sale.save()
    .then(()=>res.json('Sale updated!'))
    .catch(err=>res.status(400).json('Error : '+err));
  })
  .catch(err=>res.status(400).json('Error : '+err));
});


module.exports = router;
