import React from 'react'
import './AddPet.scss'

import AdminLayout from '../Layouts/AdminLayout'

const AddPet = () => {
  return (
    <AdminLayout>
    <div className="add-item-container-main">
        {/* this is the form container */}
        <form className="add-item-form-container" onSubmit="">
            <span className="tagline-add-item">Fill the form for add a pet</span>
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
                  <span className="input-title">breed</span>
                  <input className="input-field"/>
                </section>
              </div>
              {/* column two */}
               <div className="add-item-column">
                   <section className="input-container">
                      <span className="input-title">customerID</span>
                      <input className="input-field"/>
                    </section>
                    <section className="input-container">
                       <span className="input-title">customerName</span>
                       <input className="input-field"/>
                    </section>
                    <section className="input-container">
                        <span className="input-title">profile picture</span>
                        <input type="file" name="" id="" className='propic'/>
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