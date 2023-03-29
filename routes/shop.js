const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

const adminData = require('./admin');

const productsController = require('../controllers/products');

router.use(express.static('public'));

console.log(adminData.products);

router.get('/', productsController.getProducts);


module.exports = router;