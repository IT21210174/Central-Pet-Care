const express = require("express");
const router = express.Router();

const {retrieveOrders , retrieveSpecificOrder} = require('../controllers/deliverOrderController')


// route for get the all of the orders
router.get("/", retrieveOrders)

// route for get specific order
router.get("/:id", retrieveSpecificOrder)

module.exports = router