const mongoose = require("mongoose");


const payrollSchema = mongoose.Schema({
   
    staffId: {
        type: String,
        unique: true,
    },
    otHours:{
        type: String,
        required: [true, 'Please add OT hours']
    },
    salary: {
        type: String,
        required: [true, 'Please add salary']
    },
    paymentStatus: {
        type: String,
        required: [true, 'Please add status']
    },
    date: {
        type: String,
        required: [true, 'Please add date']
    }

}, {
    timestamps: true
})





module.exports = mongoose.model('Payroll', payrollSchema);
