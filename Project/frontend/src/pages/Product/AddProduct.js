import React, { useState } from 'react';
import Select from 'react-select';
import AdminLayout from '../Layouts/AdminLayout'
import './addProduct.scss'
import { userRequest } from '../../requestMethods'
import uploadImage from '../../uploadImage';
import { toast } from 'react-hot-toast';

function AddProduct() {

  const categoryA = [
    { value: 'Dog', label: 'Dog' },
    { value: 'Cat', label: 'Cat' },
    { value: 'Fish', label: 'Fish' },
    { value: 'Rabbit', label: 'Rabbit' },
    { value: 'Bird', label: 'Bird' },
    { value: 'Cattle', label: 'Cattle' },
    { value: 'Pig', label: 'Pig' },
    { value: 'Hamster', label: 'Hamster' },
    { value: 'Other', label: 'Other' },
  ];

  const categoryB = [
    { value: 'Food', label: 'Food' },
    { value: 'Accessory', label: 'Accessory' },
    { value: 'Toy', label: 'Toy' }
  ]

  const [selectedCategoryA, setSelectedCategoryA] = useState([])
  const [selectedCategoryB, setSelectedCategoryB] = useState(null)

  const [productName, setProductName] = useState('')
  const [brand, setBrand] = useState('')
  const [price, setPrice] = useState('')
  const [quantity, setQuantity] = useState('')
  const [description, setDescription] = useState('')
  const [SKU, setSKU] = useState('')
  const [file, setFile] = useState('')

  const handleReset = () => {
    setSelectedCategoryA([])
    setSelectedCategoryB(null)
    setProductName('')
    setBrand('')
    setPrice('')
    setQuantity('')
    setDescription('')
    setSKU('')
    setFile(null)
    // Clear the value of the file input field
    document.getElementById('file-input').value = '';
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    // Combine selected categories
    const catA = selectedCategoryA.map(cat => cat.value);
    const catB = selectedCategoryB.value;
    const imageURL = await uploadImage(file);
    userRequest.post("/products", { productName, brand, categories: { categoryA: catA, categoryB: catB }, quantity, price, description, SKU, image: imageURL })
    .then(res => {
        toast.success('Product added')
        handleReset()
    }).catch(err => {
        toast.error(err.message)
    })
  }  


  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      width: '400px',
      margin: '10px 0 15px 0',
      border: '2px solid $primary-color-navyBlue',
      backgroundColor: 'white',
      borderRadius: '8px',
      borderColor: state.isFocused ? '#7D5FFF' : '#2C2C54',
      boxShadow: state.isFocused ? '0 0 0 1px #7D5FFF' : '0 0 0 1px #2C2C54',
    }),
    menu: (provided, state) => ({
      ...provided,
      backgroundColor: 'white',
      margin: '-10px 0 0 0',
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? '#7D5FFF' : 'white',
      color: state.isSelected ? 'white' : 'black',
      '&:hover': {
        backgroundColor: 'lightgray',
      },
    }),
  };


  return (
    <AdminLayout>
      <div className="add-product-container-main">
        {/* this is the form container */}
        <form className="add-product-form-container" onSubmit={handleSubmit}>
            <span className="tagline-add-product">Add product</span>
            {/* input field container */}
            <div className="column-container">
              {/* column one */}
              <div className="add-product-column">

                <section className="input-container">
                  <span className="input-title">Product name</span>
                  <input type='text' className="input-field" value={productName} onChange={(e) => setProductName(e.target.value)} required/>
                </section>

                <section className="input-container">
                  <span className="input-title">Price</span>
                  <input type='text' pattern="[0-9]*[.]?[0-9]{0,2}" title='Enter price with up to 2 decimals (e.g. 59.99)' className="input-field" value={price} onChange={(e) => setPrice(e.target.value)} required/>
                </section>

                <section className="input-container">
                  <span className="input-title">Category A</span>
                  <Select
                    isMulti
                    options={categoryA}
                    value={selectedCategoryA}
                    onChange={setSelectedCategoryA}
                    styles={customStyles}
                    placeholder="Select category"
                    required
                  />
                </section>

                <section className="input-container">
                        <span className="input-title">product description</span>
                        <textarea className='input-textarea' id="" cols="30" rows="10" value={description} onChange={(e) => setDescription(e.target.value)} required></textarea>
                </section>

              </div>

              {/* column two */}
              <div className="add-product-column">

                    <section className="input-container">
                        <span className="input-title">Brand</span>
                        <input type='text' className="input-field" value={brand} onChange={(e) => setBrand(e.target.value)} required />
                    </section>

                    <section className="input-container">
                        <span className="input-title">Quantity</span>
                        <input type='number' min="0" className="input-field" value={quantity} onChange={(e) => setQuantity(e.target.value)} required />
                    </section>

                    <section className="input-container">
                      <span className="input-title">Category B</span>
                      <Select
                        options={categoryB}
                        value={selectedCategoryB}
                        onChange={setSelectedCategoryB}
                        styles={customStyles}
                        placeholder="Select category"
                        required
                      />
                    </section>

                    <section className="input-container">
                        <span className="input-title">SKU</span>
                        <input type='text' className="input-field" value={SKU} onChange={(e) => setSKU(e.target.value)} required/>
                    </section>

                    <section className="input-container">
                        <span className="input-title">Product image</span>
                        <input id="file-input" type="file" accept='.png, .jpeg, .jpg, .webp' className='input-field' onChange={(e) => setFile(e.target.files[0])} required/>
                    </section>

                    <div className="btn-container-add-product">
                      <button type='submit' className="submit-btn">Submit</button>
                      <button type='reset' className="reset-btn" onClick={handleReset}>Reset</button>
                    </div>

              </div>
            </div>
        </form>
    </div>
    </AdminLayout>

  )
}

export default AddProduct