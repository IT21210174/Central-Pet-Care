const asyncHandler = require('express-async-handler');

const Pet = require('../models/petRegisterModels')


// @desc    Fetch all vets
// @route   GET /api/vets
// @access  Private/Admin
const getPets = asyncHandler(async (req, res) => {

    const pets = await Pet.find();
    
    res.status(200).json(pets);

})
  
// @desc    Fetch logged in user vet
// @route   GET /api/vets/:id
// @access  Private
const getPetByID = asyncHandler(async (req, res) => {
    const pet = await Pet.findOne({ petID: req.params.petID })
  
    if (pet) {
        res.status(200).json(vet)
    } else {
        res.status(404)
        throw new Error('Pet not found')
    }
})
  
// @desc    Create vet
// @route   POST /api/vets
// @access  Private
const createPet = asyncHandler(async (req, res) => {
    
    const { petID, petName, age, breed, customerID, customerName,contactNumber, profilePicture } = req.body;

    const pet = new Pet({
        petID: petID,
        petName: petName,
        age: age,
        breed: breed,
        customerID:customerID,
        customerName: customerName,
        contactNumber:contactNumber,
        profilePicture: profilePicture,
    })

    const savedPet = await pet.save();

    res.status(200).json(savedPet); 
})
  
// @desc    Update vet
// @route   PUT /api/vets/:id
// @access  Private
const updatePet = asyncHandler(async (req, res) => {

    const pet = await Pet.findById(req.params.id)
  
    if (pet) {
  
        const updatedPet = await Pet.findByIdAndUpdate(req.params.id, { $set: req.body },{ 
            new: true,
        });
       
        res.status(200).json(updatedPet)

    } else {
        res.status(404)
        throw new Error('Pet not found')
    }
  })

// @desc    Delete vet
// @route   DELETE /api/vetstv/:id
// @access  Private
const deletePet = asyncHandler(async (req, res) => {
    const pet = await Pet.findById(req.params.id)
  
    if (pet) {
        await pet.deleteOne();
        res.status(200).json({message: 'Pet removed'})
    } else {
        res.status(404)
        throw new Error('Pet not found')
    }
})

module.exports = {getPets, getPetByID, createPet, updatePet, deletePet}
