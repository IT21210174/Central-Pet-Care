const express = require('express');
const router = express.Router();

const {getmngServices, getServiceById, addService, updateService, deleteService} = require('../controllers/manageserviceController')


router.get('/', getmngServices)
router.get('/:id', getServiceById)

router.post('/',addService)
router.delete('/:id',deleteService)
router.put('/:id',updateService)

module.exports = router;
