const mongoose = require("mongoose");
const Counter = require('./counterModel');

const serviceRecordSchema = mongoose.Schema({
    
    recordId: {
        type: String,
        unique: true,
    },
    serviceId: {
        type: String,
        required: [true, 'Please add service ID'],
        ref: 'Service'
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
        type: Number,
        required: [true, 'Please add service charge']
    }
}, {
    timestamps: true
})
serviceRecordSchema.index({
    serviceId:'text',
    petId:'text'
})

// // Before saving the product, check if it has a productId, if not, generate one
serviceRecordSchema.pre('save', async function (next) {

     try {
        const doc = this; // Get reference to the document being saved

//         // Check if the document has a productId
      if (!doc.recordId) { 

//         // If there's no productId, fetch the counter from the counters collection and increment it
        const counter = await Counter.findOneAndUpdate(
             { _id: 'recordId' }, // The counter document has _id 'productId'
             { $inc: { seq: 1 } }, // Increment the seq field by 1
             { new: true, upsert: true } // Create the counter document if it doesn't exist
        );

//         // Generate the new productId using the incremented seq value from the counter
         doc.recordId = `RE${counter.seq.toString().padStart(4, '0')}`;
         }

        return next(); // Call the next middleware in the chain
       } catch (err) {
        return next(err); // Pass any errors to the error handler middleware
      }
 });




module.exports = mongoose.model('ServiceRecord', serviceRecordSchema);
