require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
const router = new express.Router();
const productService=require('../services/productService')
const wareHouseService=require('../services/wareHouseService')
const stockService=require('../services/stockService')

router.post('/addProducts',productService.addProducts);
router.get('/getAllProducts',productService.getAllProduct);
 router.post('/CreateWareHouse',wareHouseService.CreateWareHouse);
router.get('/getAllWareHouse',wareHouseService.getAllWareHouse);
router.post('/addStock',stockService.addStock);
router.get('/getAllStock',stockService.getAllStock);
module.exports = router;