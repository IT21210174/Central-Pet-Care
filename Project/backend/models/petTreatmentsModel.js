const mongoose = require("mongoose");


const petTreatmentsSchema = mongoose.Schema({
    petID: {
        type: String,
        required: [true, 'Please add petID'],
    },
    petName: {
        type: String,
        required: [true, 'Please add pet Name'],
    },
    customerID: {
        type: String,
        required: [true, 'Please add customerID']
    },
    
    date: {
        type: String,
        required: [true, 'Please add date']
    },
    treatment: {
        type: String,
        required: [true, 'Please add treatment']
    },
    progressNotes:{
        type: String,
        required: [true, 'Please add progressNotes']
   }
}, {
    timestamps: true
})


module.exports = mongoose.model('PetTreatments', petTreatmentsSchema);
