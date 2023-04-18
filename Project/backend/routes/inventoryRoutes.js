const express = require('express')
const {
    getSingleItem,
    getAllItems,
    createSingleItem,
    updateSingleItem,
    deleteSingleItem    
} = require('../controllers/inventoryController')

const router = express.Router()

// get all the items from inventory
router.get("/",getAllItems)

// get a single item from inventory
router.get("/:id",getSingleItem)

// create a single item
router.post("/",createSingleItem)

//update a single item
router.put("/:id",updateSingleItem) 

// delete a single item
router.delete("/:id",deleteSingleItem)


// exporting the express router

module.exports = router