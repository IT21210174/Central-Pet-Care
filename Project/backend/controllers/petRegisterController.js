const asyncHandler = require('express-async-handler');

const Pet = require('../models/petRegisterModels')


// @desc    Fetch all pets
// @route   GET /api/pets
// @access  Private/Admin
const getPets = asyncHandler(async (req, res) => {

    const pets = await Pet.find();
    
    res.status(200).json(pets);

})
  
// @desc    Fetch logged in pets
// @route   GET /api/pets/:id
// @access  Private
const getPetByID = asyncHandler(async (req, res) => {
    const pet = await Pet.findOne({ petID: req.params.petID })
  
    if (pet) {
        res.status(200).json(pet)
    } else {
        res.status(404)
        throw new Error('Pet not found')
    }
})
  
// @desc    Create pet
// @route   POST /api/pets
// @access  Private
const createPet = asyncHandler(async (req, res) => {
    
    const { petID, petName,dob, gender,species, breed, customerID, customerName,contactNumber,medicalHistory, profilePicture } = req.body;

    const pet = new Pet({
        petID: petID,
        petName: petName,
        dob:dob,
        gender:gender,
        species:species,
        breed: breed,
        customerID:customerID,
        customerName: customerName,
        contactNumber:contactNumber,
        medicalHistory:medicalHistory,
        profilePicture: profilePicture,
    })

    const savedPet = await pet.save();

    res.status(200).json(savedPet); 
})
  
// @desc    Update pet
// @route   PUT /api/pets/:id
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

// @desc    Delete pet
// @route   DELETE /api/pets/:id
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
