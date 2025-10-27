const express = require('express');

const router = express.Router();

// GET /admin/add-product => Display the form for adding a new product
// This route is used to render the form page
router.get('/admin/add-product', (req, res, next) => {
  res.send(
    '<form action="/add-product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>'
  );
});

// POST /add-product => Handle the form submission
// This route is used to process the submitted product data
router.post('/add-product', (req, res, next) => {
  console.log(req.body);
  res.redirect('/');
});

module.exports = router;
