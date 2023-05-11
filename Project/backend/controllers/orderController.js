const asyncHandler = require('express-async-handler');

const Order = require('../models/orderModel')

// @desc    Create new order
// @route   POST /api/orders
// @access  Private
const createOrder = asyncHandler(async (req, res) => {
    const { orderItems, amount, address, status} = req.body
  
    if (orderItems && orderItems.length === 0) {
        res.status(400)
        throw new Error('No order items')
    } else {
        const order = new Order({
            user: req.user._id,
            orderItems,
            amount,
            address,
            status
        })
  
      const createdOrder = await order.save()
  
      res.status(201).json(createdOrder)
    }
})
  
// @desc    Get order by ID
// @route   GET /api/orders/:id
// @access  Private
const getOrderById = asyncHandler(async (req, res) => {
    const order = await Order.findById(req.params.id).populate(
        'user',
        'username email'
    )
  
    if (order) {
        res.json(order)
    } else {
        res.status(404)
        throw new Error('Order not found')
    }
})
  

// @desc    Update order to delivered
// @route   GET /api/orders/:id/deliver
// @access  Private/Admin
const updateOrder = asyncHandler(async (req, res) => {
    const order = await Order.findById(req.params.id)
  
    if (order) {

        const updatedProduct = await Product.findByIdAndUpdate(req.params.id, { $set: req.body },{ 
            new: true, 
        });
    
        res.status(200).json(updatedProduct)
    } else {
        res.status(404)
        throw new Error('Order not found')
    }
})
  
// @desc    Get logged in user orders
// @route   GET /api/orders/myorders
// @access  Private
const getMyOrders = asyncHandler(async (req, res) => {
    const orders = await Order.find({ user: req.user._id })
    res.status(200).json(orders)
})
  
// @desc    Get all orders
// @route   GET /api/orders
// @access  Private/Admin
const getOrders = asyncHandler(async (req, res) => {

    const qSearch = req.query.search;

    let orders;

    if (qSearch) {
        orders = await Order.find({
            $text: { $search: qSearch }
        }).populate('user', 'id username');
    } else {
        orders = await Order.find({}).populate('user', 'id username');
    }

    res.status(200).json(orders)
})
  

// @desc    Delete order
// @route   DELETE /api/orders/:id
// @access  Private/Admin
const deleteOrder = asyncHandler(async (req, res) => {
    const order = await Order.findById(req.params.id)
  
    if (order) {
        await order.deleteOne();
        res.status(200).json({message: 'Order removed'})
    } else {
        res.status(404)
        throw new Error('Order not found')
    }
})


// @desc    Get monthly income
// @route   GET /api/orders/income
// @access  Private/Admin
const getMonthlyIncome = asyncHandler(async (req, res) => {
    
    // Create a new Date object representing the current date and time
    const date = new Date();

    // Create a new Date object representing the last month by setting the month of the current date to the previous month
    const lastMonth = new Date(date.setMonth(date.getMonth() - 1));

    // Create a new Date object representing the month before the last month by setting the month of the last month to the month before that
    const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));

    // Use the Mongoose aggregation pipeline to retrieve the total sales income for each month in the previous two months
    const income = await Order.aggregate([
        // Only consider orders created after the start of the previous month
        { $match: { createdAt: { $gte: previousMonth } } },
        // Project a new field 'month' that extracts the month from the 'createdAt' field, and rename the 'amount' field to 'sales'
        {
            $project: {
                month: { $month: "$createdAt" },
                sales: "$amount",
            },
        },
        // Group the orders by month, and calculate the total sales income for each month
        { 
            $group: {
                _id: "$month",
                total: { $sum: "$sales" },
            },
        },
    ]);

    res.status(200).json(income);

})

module.exports = {
    createOrder,
    getOrderById,
    updateOrder,
    getMyOrders,
    getOrders,
    deleteOrder,
    getMonthlyIncome
}