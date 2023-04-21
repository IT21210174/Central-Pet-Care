import React from 'react'
import './AddStaff.scss'

import AdminLayout from '../Layouts/AdminLayout'

const AddStaff = () => {
  return (
    <AdminLayout>
    <div className="add-item-container-main">
        {/* this is the form container */}
        <form className="add-item-form-container" onSubmit="">
            <span className="tagline-add-item"> Add Staff Member</span>
            {/* input field container */}
            <div className="column-container">
              {/* column one */}
              <div className="add-item-column">
                <section className="input-container">
                  <span className="input-title">First Name</span>
                  <input className="input-field"/>
                </section>
                <section className="input-container">
                  <span className="input-title">Address</span>
                  <input className="input-field"/>
                </section>
                <section className="input-container">
                  <span className="input-title">Contact No</span>
                  <input className="input-field"/>
                </section>
                <section className="input-container">
                  <span className="input-title">Email</span>
                  <input className="input-field"/>
                </section>
                <section className="input-container">
                  <span className="input-title">Department</span>
                  <input className="input-field"/>
                </section>
                <section className="input-container">
                  <span className="input-title">Salary</span>
                  <input className="input-field"/>
                </section>
              </div>
              {/* column two */}
              <div className="add-item-column">
                    <section className="input-container">
                        <span className="input-title">Last Name</span>
                        <input className="input-field"/>
                    </section>
                    <section className="input-container">
                        <span className="input-title">NIC</span>
                        <input className="input-field"/>
                    </section>
                    <section className="input-container">
                        <span className="input-title">Date Of Birth</span>
                        <input className="input-field"/>
                    </section>
                    <section className="input-container">
                        <span className="input-title">Staff ID</span>
                        <input className="input-field"/>
                    </section>
                    <section className="input-container">
                        <span className="input-title">Joined Date</span>
                        <input className="input-field"/>
                    </section>
                    <section className="input-container">
                        <span className="input-title">Staff Member Image</span>
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

export default AddStaff