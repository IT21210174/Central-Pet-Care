import React from 'react'
import './AddPet.scss'

import AdminLayout from '../Layouts/AdminLayout'

const AddPet = () => {
  return (
    <AdminLayout>
    <div className="add-pet-container-main">
        {/* this is the form container */}
        <form className="add-item-form-container" onSubmit="">
            <span className="tagline-add-item">Add Pet</span>
            {/* input field container */}
            <div className="column-container">
              {/* column one */}
              <div className="add-item-column">
                <section className="input-container"> 
                  <span className="input-title">Pet ID</span>
                  <input className="input-field"/>
                </section>
                <section className="input-container">
                  <span className="input-title">Pet Name</span>
                  <input className="input-field"/>
                </section>
                <section className="input-container">
                  <span className="input-title">age</span>
                  <input className="input-field"/>
                </section>
                <section className="input-container">
                  <span className="input-title">category</span>
                  <select className="input-field">
                      <option className='select-option' value="clinical-item">Dog</option>
                      <option className='select-option' value="store-item">Cat</option>
                      <option className='select-option' value="store-item">Bird</option>
                      <option className='select-option' value="store-item">Rabbit</option>
                      <option className='select-option' value="store-item">Guinea Pig</option>
                      <option className='select-option' value="store-item">Hamster</option>
                      <option className='select-option' value="store-item">Reptile</option>
                      <option className='select-option' value="store-item">Fish</option>
                      
                  </select>
                  </section>
                <section className="input-container">
                  <span className="input-title">breed</span>
                  <input className="input-field"/>
                </section>
              </div>
              {/* column two */}
               <div className="add-item-column">
                   <section className="input-container">
                      <span className="input-title">customer ID</span>
                      <input className="input-field"/>
                    </section>
                    <section className="input-container">
                       <span className="input-title">customer Name</span>
                       <input className="input-field"/>
                    </section>
                    <section className="input-container">
                       <span className="input-title">Contact Number</span>
                       <input className="input-field"/>
                    </section>
                    <section className="input-container">
                       <span className="input-title">Medical History</span>
                       <textarea className='input-textarea' id="" cols="30" rows="10"></textarea>
                    </section>
                    <section className="input-container">
                        <span className="input-title">profile picture</span>
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

export default AddPet