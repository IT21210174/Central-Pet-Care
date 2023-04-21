const mongoose = require("mongoose");


const petRegisterSchema = mongoose.Schema({
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
    dob: {
        type: String,
        required: [true, 'Please add Age']
    },
    gender: {
        type: String,
        required: [true, 'Please add Age']
    },
    species:{
        type: String,
        required: [true, 'Please add species'],
        default: false,
    },
    breed: {
        type: String,
        required: [true, 'Please add Breed'],
        default: false,
    },
    customerID: {
        type: String,
        required: [true, 'Please add customerID']
    },
    customerName: {
        type: String,
        required: [true, 'Please add CustomerName']
    },
    contactNumber: {
        type: Number,
        required: [true, 'Please add contactNumber']
    },
    medicalHistory: {
        type: Number,
        required: [true, 'Please add medicalHistory']
    },
    profilePicture:{
        type: String,
        required: [true, 'Please add Profile Photo']
   }
}, {
    timestamps: true
})


module.exports = mongoose.model('PetRegister', petRegisterSchema);
