import React from 'react'
import './AddLeave.scss'

import AdminLayout from '../Layouts/AdminLayout'

const AddLeave = () => {
  return (
    <AdminLayout>
    <div className="add-item-container-main">
        {/* this is the form container */}
        <form className="add-leave-form-container" onSubmit="">
            <span className="tagline-add-item"> Leave Request Form</span>
            {/* input field container */}
            <div className="column-container">
              {/* column one */}
              <div className="add-item-column">
                <section className="input-container">
                  <span className="input-title">Staff ID</span>
                  <input className="input-field"/>
                </section>
                <section className="input-container">
                  <span className="input-title">Reason</span>
                  <input className="input-field"/>
                </section>
                <section className="input-container">
                  <span className="input-title">Leave Reqested</span>
                  <span className="input-title">From</span>
                  <input className="input-field"/>
                </section>
                <section className="input-container">
                  <span className="input-title">To</span>
                  <input className="input-field"/>
                </section>
                <div className="btn-container-add-item">
                      <button type='submit' className="submit-btn">Submit</button>
                      <button type='reset' className="reset-btn">Reset</button>
                </div>
            </div>
               
              
              {/* column two */}
             
            </div>
        </form>
    </div>
    </AdminLayout>
  )
}

export default AddLeave