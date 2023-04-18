import React, { useContext } from 'react'
import axios from 'axios'
import { useState } from 'react';
import uploadImage from '../../uploadImage';
import { toast } from 'react-hot-toast';

const AddProduct = () => {

    const [productName, setProductname] = useState(null)
    const [quantity, setQuantity] = useState(null)
    const [price, setPrice] = useState(null)
    const [file, setFile] = useState(null)


    const handleSubmit = async (e) => {
        e.preventDefault()
        const imageURL = await uploadImage(file);
        axios.post("http://localhost:4005/products", {productName, price, quantity, image: imageURL}).
        then(res => {
            toast.success('Product added')
            setProductname('')
            setPrice('')
            setQuantity('')
        }).catch(err => {
            console.log(err.message);
    
            alert(err.message);
        })
    }    
    

    return (
        <form className="productForm">

            <h1>Add Product</h1>

            <label>Product Name</label>
            <input name='productName' value={productName} onChange={(e) => setProductname(e.target.value)} />

            <label>Quantity</label>
            <input name='quantity' type='number' value={quantity} onChange={(e) => setQuantity(e.target.value)} />

            <label>Price</label>
            <input name='price' type='text' value={price} onChange={(e) => setPrice(e.target.value)} />

            
            <label>Image</label>
            <input name='image' type='file' accept='.png, .jpeg, .jpg, .webp' onChange={(e) => setFile(e.target.files[0])} />

            <button onClick={handleSubmit}>Submit</button>

        </form> 
    )
}

export default AddProduct