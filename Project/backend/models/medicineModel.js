const mongoose = require("mongoose");

const medicineSchema = mongoose.Schema({
    medicineName: {
        type: String,
        unique: [true, 'Please add medicine name'],
    },
    status: {
        type: String,
        required: true,
    }
}, {
    timestamps: true
})




module.exports = mongoose.model('Medicine', medicineSchema);
