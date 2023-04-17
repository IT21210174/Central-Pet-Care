const express = require('express');
const router = express.Router();

const {getVets, getOneVet, createVet, updateVet, deleteVet} = require('../controllers/vetController')


router.get('/', getVets)
router.get('/:id', getOneVet)

router.post('/', createVet)
router.delete('/:id', updateVet)
router.put('/:id', deleteVet)

module.exports = router;