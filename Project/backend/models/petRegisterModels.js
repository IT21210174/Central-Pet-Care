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
    age: {
        type: String,
        required: [true, 'Please add Age']
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
    profilePicture:{
        type: String,
        required: [true, 'Please add Profile Photo']
   }
}, {
    timestamps: true
})




module.exports = mongoose.model('PetRegister', petRegisterSchema);
