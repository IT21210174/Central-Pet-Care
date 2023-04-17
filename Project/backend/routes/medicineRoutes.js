const express = require('express');
const router = express.Router();

const {getMedicines, getOneMedicine, createMedicine, updateMedicine, deleteMedicine} = require('../controllers/medicineController')


router.get('/', getMedicines)
router.get('/:id', getOneMedicine)

router.post('/', createMedicine)
router.delete('/:id', updateMedicine)
router.put('/:id', deleteMedicine)

module.exports = router;