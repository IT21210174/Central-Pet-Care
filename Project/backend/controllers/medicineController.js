const asyncHandler = require('express-async-handler');

const Medicine = require('../models/medicineModel')


// @desc    Fetch all carts
// @route   GET /api/carts
// @access  Private/Admin
const getMedicines = asyncHandler(async (req, res) => {

    const medicines = await Medicine.find();
    
    res.status(200).json(medicines);

})
  
// @desc    Fetch logged in user cart
// @route   GET /api/carts/:id
// @access  Private
const getOneMedicine = asyncHandler(async (req, res) => {
    const medicine = await Medicine.findOne({ medId: req.params.medId })
  
    if (medicine) {
        res.status(200).json(medicine)
    } else {
        res.status(404)
        throw new Error('Medicine not found')
    }
})
  
// @desc    Create cart
// @route   POST /api/carts
// @access  Private
const createMedicine = asyncHandler(async (req, res) => {
    
    const { medicineName, status } = req.body;

    const medicine = new Medicine({
        medicineName: req.body.medicineName,
        status: req.body.status,
    })

    const savedMedicine = await medicine.save();

    res.status(200).json(savedMedicine); 
})
  
// @desc    Update cart
// @route   PUT /api/carts/:id
// @access  Private
const updateMedicine = asyncHandler(async (req, res) => {

    const medicine = await Medicine.findById(req.params.id)
  
    if (medicine) {
  
        const updatedMedicine = await Medicine.findByIdAndUpdate(req.params.id, { $set: req.body },{ 
            new: true,
        });
       
        res.status(200).json(updatedMedicine)

    } else {
        res.status(404)
        throw new Error('Medicine not found')
    }
  })

// @desc    Delete cart
// @route   DELETE /api/carts/:id
// @access  Private
const deleteMedicine = asyncHandler(async (req, res) => {
    const medicine = await Medicine.findById(req.params.id)
  
    if (medicine) {
        await medicine.deleteOne();
        res.status(200).json({message: 'medicine removed'})
    } else {
        res.status(404)
        throw new Error('medicine not found')
    }
})

module.exports = {getMedicines, getOneMedicine, createMedicine, updateMedicine, deleteMedicine}