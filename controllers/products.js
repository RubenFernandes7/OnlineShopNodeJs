const products = [];

const path = require('path');

const rootDir = require('../util/path');


exports.getAddProduct = (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
};

exports.addProduct = (req, res, next) => {
    console.log(req.body);
    products.push({title: req.body.title});
    res.redirect('/');
};

exports.getProducts = (req, res, next) => {
   res.render('shop', {prods: products, docTitle: 'Shop'});
};