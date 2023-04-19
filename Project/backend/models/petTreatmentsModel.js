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
    medicalHistory: {
        type: String,
        required: [true, 'Please add medicalHistory'],
        default: false,
    },
    vaccinationHistory: {
        type: String,
        required: [true, 'Please add vaccinationHistory']
    },
    currentMedications: {
        type: String,
        required: [true, 'Please add currentMedications']
    },
    
    progressNotes:{
        type: String,
        required: [true, 'Please add progressNotes']
   }
}, {
    timestamps: true
})


module.exports = mongoose.model('PetTreatments', petTreatmentsSchema);
