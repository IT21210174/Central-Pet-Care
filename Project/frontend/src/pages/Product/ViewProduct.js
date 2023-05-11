import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import AdminLayout from '../Layouts/AdminLayout';
import { userRequest } from '../../requestMethods'
import { toast } from 'react-hot-toast';

import './viewProduct.scss'

function ViewProduct() {

    const { id } = useParams()

    const [categoryA, setCategoryA] = useState([])
    const [categoryB, setCategoryB] = useState(null)

    const [productId, setProductId] = useState('')
    const [productName, setProductName] = useState('')
    const [brand, setBrand] = useState('')
    const [price, setPrice] = useState('')
    const [quantity, setQuantity] = useState('')
    const [description, setDescription] = useState('')
    const [SKU, setSKU] = useState('')
    const [imageURL, setImageURL] = useState('')

    useEffect(() => {
        userRequest.get('/products/' + id)
        .then(res => {
            setProductId(res.data.productId)
            setProductName(res.data.productName)
            setBrand(res.data.brand)
            setPrice(res.data.price)
            setQuantity(res.data.quantity)
            setDescription(res.data.description)
            setSKU(res.data.SKU)
            setCategoryA(res.data.categories.categoryA);
            setCategoryB(res.data.categories.categoryB);
            setImageURL(res.data.image)
        }).catch(err =>{
            toast.error(err.message)
        })
      }, [id])

    return (
        <AdminLayout>
            <div className='product'>
            <table>
                <tr>
                    <td colSpan='2' className='imageContainer'>
                        <img src={imageURL} className='image' height='120px' />
                    </td>
                </tr>
                <tr>
                    <td>Product ID</td>
                    <td>{productId}</td>
                </tr>
                <tr>
                    <td>Product Name</td>
                    <td>{productName}</td>
                </tr>
                <tr>
                    <td>Brand</td>
                    <td>{brand}</td>
                </tr>
                <tr>
                    <td>Price</td>
                    <td>{price}</td>
                </tr>
                <tr>
                    <td>Quantity</td>
                    <td>{quantity}</td>
                </tr>
                <tr>
                    <td>SKU</td>
                    <td>{SKU}</td>
                </tr>
                <tr>
                    <td>Categories</td>
                    <td>{categoryA.map(cat => cat + ', ')}{categoryB}</td>
                </tr>
                <tr>
                    <td>Description</td>
                    <td style={{whiteSpace: 'pre-wrap'}}>{description}</td>
                </tr>
            </table>
            </div>
        </AdminLayout>
    )
}

export default ViewProduct