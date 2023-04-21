const mongoose = require("mongoose");


const mngserviceSchema = mongoose.Schema({
    serviceId: {
        type: String,
        unique: true,
    },
    serviceName: {
        type: String,
        required: [true, 'Please add service name']
    },
    serviceType: {
        type: String,
        required: [true, 'Please add service type']
    },
    serviceCharge: {
        type: String,
        required: [true, 'Please add service charge']
    },
    serviceDescription: {
        type: String,
        required: [true, 'Please add service description']
    },
    
    serviceImage: {
        type: String,
        required: [true, 'Please add service image']
    }
}, {
    timestamps: true
})




module.exports = mongoose.model('Service', mngserviceSchema);
