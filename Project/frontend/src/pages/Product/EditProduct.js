import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import AdminLayout from '../Layouts/AdminLayout'
import './addProduct.scss'
import { userRequest } from '../../requestMethods'
import uploadImage from '../../uploadImage';
import { toast } from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';

function EditProduct() {

  const { id } = useParams()
  const navigate = useNavigate()

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
  const [file, setFile] = useState(null)
  const [imageURL, setImageURL] = useState('')

  useEffect(() => {
    userRequest.get('/products/' + id)
    .then(res => {
        setProductName(res.data.productName)
        setBrand(res.data.brand)
        setPrice(res.data.price)
        setQuantity(res.data.quantity)
        setDescription(res.data.description)
        setSKU(res.data.SKU)
        setSelectedCategoryA(res.data.categories.categoryA.map(cat => ({ value: cat, label: cat })));
        setSelectedCategoryB({ value: res.data.categories.categoryB, label: res.data.categories.categoryB });
        setImageURL(res.data.image)
    }).catch(err =>{
        toast.error(err.message)
    })
  }, [id])


  const handleSubmit = async (e) => {
    e.preventDefault()
    // Combine selected categories
    const catA = selectedCategoryA.map(cat => cat.value);
    const catB = selectedCategoryB.value;
    if(file ){
      const URL = await uploadImage(file)
      userRequest.put("/products/" + id, { productName, brand, categories: { categoryA: catA, categoryB: catB }, quantity, price, description, SKU, image: URL })
      .then(res => {
          toast.success('Product updated')
          navigate('/products/manageProducts')
      }).catch(err => {
          toast.error(err.message)
      })
    }
    else {
      userRequest.put("/products/" + id, { productName, brand, categories: { categoryA: catA, categoryB: catB }, quantity, price, description, SKU, image: imageURL })
      .then(res => {
          toast.success('Product updated')
          navigate('/products/manageProducts')
      }).catch(err => {
          toast.error(err.message)
      })
    }
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
      <div className="add-item-container-main">
        {/* this is the form container */}
        <form className="add-item-form-container" onSubmit={handleSubmit}>
            <span className="tagline-add-item">Edit product</span>
            {/* input field container */}
            <div className="column-container">
              {/* column one */}
              <div className="add-item-column">

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
              <div className="add-item-column">

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
                        <input id="file-input" type="file" accept='.png, .jpeg, .jpg, .webp' className='input-field' onChange={(e) => setFile(e.target.files[0])} />
                    </section>

                    <div className="btn-container-add-item">
                      <button type='submit' className="submit-btn">Update</button>
                      <button type='reset' className="reset-btn">Reset</button>
                    </div>

              </div>
            </div>
        </form>
    </div>
    </AdminLayout>

  )
}

export default EditProduct