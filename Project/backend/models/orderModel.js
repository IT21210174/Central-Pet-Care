const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    orderItems: [
        {
            productId: {
                type: mongoose.Schema.Types.ObjectId,
                required: true,
                ref: 'Product'
            },
            productName: {
                type: String,
                required: true,
            },
            image: {
                type: String,
                required: true,
            },
            unitPrice: {
                type: Number,
                required: true,
            },
            quantity: {
                type: Number,
                required: true,
                default: 1
            },
            productTotal: {
                type: Number,
                required: true,
            },
        }
    ],
    subTotal: {
        type: Number,
        required: true
    },
    total: {
        type: Number,
        required: true
    },
    shipping: {
        type: Object,
        required: true
    },
    paymentStatus: {
        type: String,
        required: true
    },
    deliveryStatus: {
        type: String,
        required: true,
        default: "pending"
    }
}, {
    timestamps: true
})


module.exports = mongoose.model('Order', orderSchema);
