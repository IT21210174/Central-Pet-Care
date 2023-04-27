const asyncHandler = require("express-async-handler");
const Order = require("../models/orderModel");

const retrieveOrders = asyncHandler(
    async(req,res) => {
        const orders = await Order.find({})
        res.status(200).json(orders)
    }
)


const retrieveSpecificOrder = asyncHandler(
    async(req,res) => {
        const orderID = req.params.id;
        const selectedOrder = await Order.findOne({ orderId: orderID });
        // const selectedOrder = await Order.findById();

        if (selectedOrder.length !== 0) {
            res.status(200).json(selectedOrder);
        } else {
            res.status(404).json({ message: "order not found" });
        }
    }
)


module.exports = {retrieveOrders ,retrieveSpecificOrder}