const mongoose = require("mongoose");


const servicerecordSchema = mongoose.Schema({
    recordId: {
        type: String,
        unique: true,
    },
    serviceId: {
        type: String,
        required: [true, 'Please add service ID']
    },
    customerId: {
        type: String,
        required: [true, 'Please add customer ID']
    },
    vcslId: {
        type: String,
        required: [true, 'Please add vcsl ID']
    },
    petId: {
        type: String,
        required: [true, 'Please add pet ID']
    },
    date: {
        type: String,
        required: [true, 'Please add date']
    },
    
    serviceCharge: {
        type: String,
        required: [true, 'Please add service charge']
    }
}, {
    timestamps: true
})




module.exports = mongoose.model('Records', servicerecordSchema);
