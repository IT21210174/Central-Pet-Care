const asyncHandler = require('express-async-handler');

const Treatments = require('../models/petTreatmentsModel')

// @desc    Fetch all treatment
// @route   GET /api/treatment
// @access  Private/Admin
const getTreatments = asyncHandler(async (req, res) => {

    const treatments = await Treatments.find();
    
    res.status(200).json(treatments);

})

// @desc    Fetch logged in treatment
// @route   GET /api/treatment/:id
// @access  Private
const getTreatmentByID = asyncHandler(async (req, res) => {
    const treatment = await Treatments.findOne({ petID: req.params.petID })
  
    if (treatment) {
        res.status(200).json(treatment)
    } else {
        res.status(404)
        throw new Error('treatment not found')
    }
})
  
// @desc    Create treatment
// @route   POST /api/treatment
// @access  Private
const createTreatment = asyncHandler(async (req, res) => {
    
    const { petID, petName, customerID, medicalHistory, vaccinationHistory, currentMedications,progressNotes} = req.body;

    const treatment = new Treatments({
        petID: petID,
        petName: petName,
        customerID: customerID,
        medicalHistory: medicalHistory,
        vaccinationHistory:vaccinationHistory,
        currentMedications: currentMedications,
        progressNotes:progressNotes,
        
    })

    const savedTreatments = await treatment.save();

    res.status(200).json(savedTreatments); 
})
  
// @desc    Update treatment
// @route   PUT /api/treatment/:id
// @access  Private
const updateTreatment = asyncHandler(async (req, res) => {

    const treatment = await Treatments.findById(req.params.id)
  
    if (treatment) {
  
        const updatedTreatmnets = await Treatments.findByIdAndUpdate(req.params.id, { $set: req.body },{ 
            new: true,
        });
       
        res.status(200).json(updatedTreatmnets)

    } else {
        res.status(404)
        throw new Error('treatments not found')
    }
  })

// @desc    Delete treatment
// @route   DELETE /api/treatment/:id
// @access  Private
const deleteTreatment = asyncHandler(async (req, res) => {
    const treatment = await Treatments.findById(req.params.id)
  
    if (treatment) {
        await treatment.deleteOne();
        res.status(200).json({message: 'treatment removed'})
    } else {
        res.status(404)
        throw new Error('treatment not found')
    }
})

module.exports = {getTreatments, getTreatmentByID, createTreatment, updateTreatment, deleteTreatment}
