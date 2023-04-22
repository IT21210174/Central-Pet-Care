const mongoose = require("mongoose");

const prescriptionSchema = mongoose.Schema({
    petname: {
        type: String,
        unique: [true, 'Please add pet name'],
    },
    address: {
        type: String,
        required: [true, 'Please add veterinary address']
    },
    description: {
        type: String,
        required: [true, 'Please add description']
    },
    medicine: {
        type: String,
        required: [true, 'Please add email medicine']
    },
    dosage: {
        type: String,
        required: [true, 'Please add dosage']
    }
}, {
    timestamps: true
})




module.exports = mongoose.model('Prescription', prescriptionSchema);
