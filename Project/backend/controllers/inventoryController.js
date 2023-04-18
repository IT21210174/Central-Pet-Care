const asyncHandler = require("express-async-handler")
const Item = require('../models/itemModel')
// const itemModel = require("../models/itemModel")

// get a single item
const getSingleItem = asyncHandler(async(req,res) => {

     const storeKeepingUnit = req.params.id

     const getSingleItem = await Item.find({sku:storeKeepingUnit})

     if(getSingleItem.length === 0){
          res.status(400).json({message: "no item found"})
     }
     else{
          res.status(200).json(getSingleItem)
     }
})

// get all items
const getAllItems = asyncHandler(async(req,res) => {

     const getAllItems = await Item.find({}).sort({createdAt:-1})

     if(getAllItems){
          res.json(getAllItems)
     }
     else{
          res.json({message:"no items in the inventory"})
     }

    // res.status(200).json({message: "route is working bro"})
})

// create single item
const createSingleItem = asyncHandler(async(req,res) => {

     const sample = {
               sku , 
               itemName , 
               category , 
               price , 
               rackNo , 
               quantity , 
               manufacturer,
               productDescription,
               productImage } = req.body

     const createItem = await Item.create(sample)

     res.json(createItem)

})

// update a single item
const updateSingleItem = asyncHandler(async(req,res) => {
     
     const storeKeepingUnit = req.params.id

     const requestedItem = await Item.find({sku:storeKeepingUnit})

     if(requestedItem.length === 0){
          res.status(404)
          throw new Error("Item not existing")
     }
     else{
          const updatedItem = await Item.findByIdAndUpdate(requestedItem[0]._id , req.body , {new: true})
          res.status(202).json(updatedItem)
     }
})

// delete a single item
const deleteSingleItem = asyncHandler(async(req,res) => {
     
     const id = req.params.id

     await Item.findByIdAndDelete(id)
     res.status(200)
     res.json({message: "item was deleted from the database"})

})

module.exports = {
     getSingleItem,
     getAllItems,
     createSingleItem,
     updateSingleItem,
     deleteSingleItem
}