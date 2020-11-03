var express = require('express');
var router = express.Router();
var Order = require('../models/Order');
/* GET home page. */
router.get('/', async function(req, res, next) {
  try {
    const orders = await Order.create(req.body);

    res.status(201).json({
      
      data: { orders }
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err
    });
  }
});

router.post('/add', async function(req, res){
  try {
    const newOrder = await Order.create(req.body);

    res.status(201).json({
      
      data: { order: newOrder}
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err
    });
  }
});

module.exports = router;