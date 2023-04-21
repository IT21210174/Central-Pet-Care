import React from 'react'
import './AddTreatments.scss'

import AdminLayout from '../Layouts/AdminLayout'

const AddTreatments = () => {
  return (
    <AdminLayout>
    <div className="add-treatment-container-main">
        {/* this is the form container */}
        <form className="add-treatment-form-container" onSubmit="">
            <span className="tagline-add-treatment">Add Treatment</span>
            {/* input field container */}
            
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
                  <span className="input-title">Customet ID</span>
                  <input className="input-field"/>
                </section>
               
                <section className="input-container">
                  <span className="input-title">Date</span>
                  <input className="input-field" type="date" id="date" name="date"/>
                </section>
              
               <section className="input-container">
                  <span className="input-title">Treatments</span>
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
        </form>
    </div>
    </AdminLayout>
  )
}

export default AddTreatments