const asyncHandler = require('express-async-handler');

const ServiceRecords = require('../models/servicerecordsModel')


// @desc    Fetch all records
// @route   GET /api/records
// @access  Private/Admin
const getservicerecords = asyncHandler(async (req, res) => {

    const servicerecords = await ServiceRecords.find();
    
    res.status(200).json(servicerecords);

})
  
// @desc    Fetch logged in user record
// @route   GET /api/records/:id
// @access  Private
const getServiceRecordById = asyncHandler(async (req, res) => {
    const servicerecord = await ServiceRecords.findOne({ recordId: req.params.recordId })
  
    if (servicerecord) {
        res.status(200).json(servicerecord)
    } else {
        res.status(404)
        throw new Error('Service Record not found')
    }
})
  
// @desc    Create record
// @route   POST /api/records
// @access  Private
const addServiceRecord = asyncHandler(async (req, res) => {
    
    const {recordId,serviceId,customerId,vcslId,petId,date,serviceCharge} = req.body;

    const servicerecord = new ServiceRecords({
        recordId: req.body.recordId,
        serviceId: req.body.serviceId,
        customerId: req.body.customerId,
        vcslId: req.body.vcslId,
        petId: req.body.petId,
        date: req.body.date,
        serviceCharge:req.body.serviceCharge,
    })

    const savedServiceRecord = await servicerecord.save();

    res.status(200).json(savedServiceRecord); 
})
  
// @desc    Update record
// @route   PUT /api/record/:id
// @access  Private
const updateServiceRecord = asyncHandler(async (req, res) => {

    const servicerecord = await ServiceRecords.findById(req.params.id)
  
    if (servicerecord) {
  
        const updatedServiceRecord = await ServiceRecords.findByIdAndUpdate(req.params.id, { $set: req.body },{ 
            new: true,
        });
       
        res.status(200).json(updatedServiceRecord)

    } else {
        res.status(404)
        throw new Error('Service Record not found')
    }
  })

// @desc    Delete record
// @route   DELETE /api/record/:id
// @access  Private
const deleteServiceRecord = asyncHandler(async (req, res) => {
    const servicerecord = await ServiceRecords.findById(req.params.id)
  
    if (servicerecord) {
        await servicerecord.deleteOne();
        res.status(200).json({message: 'Service Record removed'})
    } else {
        res.status(404)
        throw new Error('Service Record not found')
    }
})

module.exports = {getservicerecords, getServiceRecordById, addServiceRecord, updateServiceRecord, deleteServiceRecord}