const express = require('express');
const router = express.Router();

const {getservicerecords, getServiceRecordById, addServiceRecord, updateServiceRecord, deleteServiceRecord} = require('../controllers/servicerecordsController')


router.get('/', getservicerecords)
router.get('/:id', getServiceRecordById)

router.post('/',addServiceRecord)
router.delete('/:id',deleteServiceRecord)
router.put('/:id',updateServiceRecord)

module.exports = router;
