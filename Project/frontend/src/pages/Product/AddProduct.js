import React, { useState } from 'react';
import Select from 'react-select';
import AdminLayout from '../Layouts/AdminLayout'

function AddProduct() {

  const [selectedOptionsA, setSelectedOptionsA] = useState([]);
  const [selectedOptionsB, setSelectedOptionsB] = useState([]);

  const categoryA = [
    { value: 'dog', label: 'Dog' },
    { value: 'cat', label: 'Cat' },
    { value: 'fish', label: 'Fish' },
    { value: 'rabbit', label: 'Rabbit' },
    { value: 'bird', label: 'Bird' },
    { value: 'cattle', label: 'Cattle' },
    { value: 'pig', label: 'Pig' },
    { value: 'hamster', label: 'Hamster' },
    { value: 'other', label: 'Other' },
  ];

  const categoryB = [
    { value: 'food', label: 'Food' },
    { value: 'accessory', label: 'accessory' },
    { value: 'toy', label: 'Toy' }
  ]

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
      margin: '-10px 0 0 0'
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? 'blue' : 'white',
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
        <form className="add-item-form-container" onSubmit="">
            <span className="tagline-add-item">Add product</span>
            {/* input field container */}
            <div className="column-container">
              {/* column one */}
              <div className="add-item-column">
                <section className="input-container">
                  <span className="input-title">Product name</span>
                  <input className="input-field"/>
                </section>
                <section className="input-container">
                  <span className="input-title">Price</span>
                  <input className="input-field"/>
                </section>
                <section className="input-container">
                  <span className="input-title">Category A</span>
                  <Select
                    isMulti
                    options={categoryA}
                    value={selectedOptionsA}
                    onChange={setSelectedOptionsA}
                    styles={customStyles}
                    isRequired={true}
                  />
                </section>
                <section className="input-container">
                        <span className="input-title">product description</span>
                        <textarea className='input-textarea' id="" cols="30" rows="10"></textarea>
                </section>
              </div>
              {/* column two */}
              <div className="add-item-column">
                    <section className="input-container">
                        <span className="input-title">Brand</span>
                        <input className="input-field"/>
                    </section>
                    <section className="input-container">
                        <span className="input-title">Quantity</span>
                        <input className="input-field"/>
                    </section>
                    <section className="input-container">
                      <span className="input-title">Category B</span>
                      <Select
                        options={categoryB}
                        value={null}
                        onChange={setSelectedOptionsB}
                        styles={customStyles}
                        isRequired={true}
                      />
                    </section>
                    <section className="input-container">
                        <span className="input-title">SKU</span>
                        <input className="input-field"/>
                    </section>
                    <section className="input-container">
                        <span className="input-title">Product image</span>
                        <input type="file" name="" id="" className='input-field'/>
                    </section>
                    <div className="btn-container-add-item">
                      <button type='submit' className="submit-btn">Submit</button>
                      <button type='reset' className="reset-btn">Reset</button>
                    </div>
              </div>
            </div>
        </form>
    </div>
    </AdminLayout>

  )
}

export default AddProduct