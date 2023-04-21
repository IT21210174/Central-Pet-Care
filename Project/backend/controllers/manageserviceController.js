const asyncHandler = require('express-async-handler');

const MngService = require('../models/manageserviceModel')


// @desc    Fetch all records
// @route   GET /api/records
// @access  Private/Admin
const getmngServices = asyncHandler(async (req, res) => {

    const services = await MngService.find();
    
    res.status(200).json(services);

})
  
// @desc    Fetch logged in user record
// @route   GET /api/records/:id
// @access  Private
const getServiceById = asyncHandler(async (req, res) => {
    const service = await MngService.findOne({ serviceId: req.params.serviceId })
  
    if (service) {
        res.status(200).json(service)
    } else {
        res.status(404)
        throw new Error('Service not found')
    }
})
  
// @desc    Create record
// @route   POST /api/records
// @access  Private
const addService = asyncHandler(async (req, res) => {
    
    const {serviceId,serviceName, serviceType, serviceCharge,serviceDescription,serviceImage} = req.body;

    const service = new MngService({
        serviceId: req.body.serviceId,
        serviceName: req.body.serviceName,
        serviceType: req.body.serviceType,
        serviceCharge:req.body.serviceCharge,
        serviceDescription: req.body.serviceDescription,
        serviceImage: req.body.serviceImage,
    })

    const savedService = await service.save();

    res.status(200).json(savedService); 
})
  
// @desc    Update record
// @route   PUT /api/records/:id
// @access  Private
const updateService = asyncHandler(async (req, res) => {

    const service = await MngService.findById(req.params.id)
  
    if (service) {
  
        const updatedService = await MngService.findByIdAndUpdate(req.params.id, { $set: req.body },{ 
            new: true,
        });
       
        res.status(200).json(updatedService)

    } else {
        res.status(404)
        throw new Error('Service not found')
    }
  })

// @desc    Delete record
// @route   DELETE /api/records/:id
// @access  Private
const deleteService = asyncHandler(async (req, res) => {
    const service = await MngService.findById(req.params.id)
  
    if (service) {
        await service.deleteOne();
        res.status(200).json({message: 'Service removed'})
    } else {
        res.status(404)
        throw new Error('Service not found')
    }
})

module.exports = {getmngServices, getServiceById, addService, updateService, deleteService}