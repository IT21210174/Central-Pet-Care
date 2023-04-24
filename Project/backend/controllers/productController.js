const asyncHandler = require('express-async-handler');

const Product = require('../models/productModel')


// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
const getProducts = asyncHandler(async (req, res) => {

    const qNew = req.query.new;
    const qCategory = req.query.category;
    const qSearch = req.query.search;
 
    let products;

    if (qNew) {
        products = await Product.find().sort({ createdAt: -1 }).limit(5);
    } else if (qCategory) {
        products = await Product.find({
            categories: { $in: [qCategory] }
        })
    } else if (qSearch) {
        products = await Product.find({
            $text: { $search: qSearch }
        });
    } else {
        products = await Product.find();
    }

    res.status(200).json(products);

})
  
// @desc    Fetch single product
// @route   GET /api/products/:id
// @access  Public
const getProductById = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)
  
    if (product) {
      res.status(200).json(product)
    } else {
      res.status(404)
      throw new Error('Product not found')
    }
})
  
// @desc    Add a product
// @route   POST /api/products
// @access  Private/Admin
const addProduct = asyncHandler(async (req, res) => {

    const { productName, brand, categories, quantity, price, description, SKU, image } = req.body;
  
    const product = new Product({ productName, brand, categories, quantity, price, description, SKU, image });

    const savedProduct = await product.save();

    res.status(200).json(savedProduct); 
})
  
// @desc    Update a product
// @route   PUT /api/products/:id
// @access  Private/Admin
const updateProduct = asyncHandler(async (req, res) => {

    const product = await Product.findById(req.params.id)
  
    if (product) {
    
        // const { productName, brand, categories, quantity, Price, description, image } = req.body;

        // // Update the fields of the product object
        // product.productName = productName;
        // product.brand = brand;
        // product.categories = categories;
        // product.quantity = quantity;
        // product.price = Price;
        // product.description = description;
        // product.image = image;
    
        // // Save the updated product object to the database
        // const updatedProduct = await product.save();
  
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id, { $set: req.body },{ 
            new: true, 
            runValidators: true,
        });
       
        res.status(200).json(updatedProduct)

    } else {
        res.status(404)
        throw new Error('Product not found')
    }
  })

// @desc    Delete a product
// @route   DELETE /api/products/:id
// @access  Private/Admin
const deleteProduct = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)
  
    if (product) {
        await product.deleteOne();
        res.status(200).json({message: 'Product removed'})
    } else {
        res.status(404)
        throw new Error('Product not found')
    }
})

module.exports = {getProducts, getProductById, addProduct, updateProduct, deleteProduct}