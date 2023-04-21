import React from 'react'
import './addRecord.scss'

import AdminLayout from '../Layouts/AdminLayout'

const AddRecord = () => {
  return (
    <AdminLayout>
    <div className="add-record-container-main">
        {/* this is the form container */}
        <form className="add-record-form-container" onSubmit="">
            <span className="tagline-add-item">Fill the form for add service record</span>
            {/* input field container */}
            <div className="column-container">
              {/* column one */}
              <div className="add-record-column">
              <section className="input-container">
                  <span className="input-title">record id</span>
                  <input className="input-field"/>
                </section>
                <section className="input-container">
                  <span className="input-title">service id</span>
                  <input className="input-field"/>
                </section>
                <section className="input-container">
                  <span className="input-title">customer id</span>
                  <input className="input-field"/>
                </section>
                <section className="input-container">
                  <span className="input-title">vcsl id</span>
                  <input className="input-field"/>
                </section>
                <section className="input-container">
                  <span className="input-title">pet id</span>
                  <input className="input-field"/>
                </section>
                <section className="input-container">
                        <span className="input-title">date</span>
                        <input className="input-field"/>
                    </section>
                <section className="input-container">
                        <span className="input-title">service charge</span>
                        <input className="input-field"/>
                    </section>    
                    
                    <div className="btn-container-add-service">
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

export default AddRecord
