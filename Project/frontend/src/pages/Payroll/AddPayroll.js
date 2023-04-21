import React from 'react'
import './AddPayroll.scss'

import AdminLayout from '../Layouts/AdminLayout'

const AddPayroll = () => {
  return (
    <AdminLayout>
    <div className="add-item-container-main">
        {/* this is the form container */}
        <form className="add-payroll-form-container" onSubmit="">
            <span className="tagline-add-item"> Add Payroll Details</span>
            {/* input field container */} 
            <div className="column-container">
              {/* column one */}
              <div className="add-item-column">
                <section className="input-container">
                  <span className="input-title">Staff ID</span>
                  <input className="input-field"/>
                </section>
                <section className="input-container">
                  <span className="input-title">OT Hours</span>
                  <input className="input-field"/>
                </section>
                <section className="input-container">
                  <span className="input-title">Salary</span>
                  <input className="input-field"/>
                </section>
                <section className="input-container">
                  <span className="input-title">Payment Status</span>
                  <input className="input-field"/>
                </section>
                <section className="input-container">
                  <span className="input-title">Date</span>
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

export default AddPayroll