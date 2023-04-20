import React from 'react'
import './AddTreatments.scss'

import AdminLayout from '../Layouts/AdminLayout'

const AddTreatments = () => {
  return (
    <AdminLayout>
    <div className="add-item-container-main">
        {/* this is the form container */}
        <form className="add-item-form-container" onSubmit="">
            <span className="tagline-add-item">Fill the form for add Treatments</span>
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
                  <span className="input-title">Customer ID</span>
                  <input className="input-field"/>
                </section>
                <section className="input-container">
                  <span className="input-title">Medical History</span>
                  <textarea className='input-textarea' id="" cols="30" rows="10"></textarea>
                </section>
              </div>
              {/* column two */}
               <div className="add-item-column">
               <section className="input-container">
                  <span className="input-title">Current Medications</span>
                  <textarea className='input-textarea' id="" cols="30" rows="10"></textarea>
                </section>
                <section className="input-container">
                  <span className="input-title">Vaccination History</span>
                  <textarea className='input-textarea' id="" cols="30" rows="10"></textarea>
                </section>
                <section className="input-container">
                  <span className="input-title">Progress Notes</span>
                  <textarea className='input-textarea' id="" cols="30" rows="10"></textarea>
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

export default AddTreatments