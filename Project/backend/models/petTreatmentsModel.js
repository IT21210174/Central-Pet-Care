const mongoose = require("mongoose");


const petTreatmentsSchema = mongoose.Schema({
    petID: {
        type: String,
        required: [true, 'Please add petID'],
        unique: true
    },
    petName: {
        type: String,
        required: [true, 'Please add pet Name'],
        unique: true
    },
    customerID: {
        type: String,
        required: [true, 'Please add customerID']
    },
    
    date: {
        type: String,
        required: [true, 'Please add date']
    },
    treat: {
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
