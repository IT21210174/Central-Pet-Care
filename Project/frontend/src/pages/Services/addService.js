import React from 'react'
import './addService.scss'

import AdminLayout from '../Layouts/AdminLayout'

const addService = () => {
  return (
    <AdminLayout>
    <div className="add-service-container-main">
        {/* this is the form container */}
        <form className="add-service-form-container" onSubmit="">
            <span className="tagline-add-item">Fill the form for add service</span>
            {/* input field container */}
            <div className="column-container">
              {/* column one */}
              <div className="add-service-column">
                <section className="input-container">
                  <span className="input-title">service id</span>
                  <input className="input-field"/>
                </section>
                <section className="input-container">
                  <span className="input-title">service name</span>
                  <input className="input-field"/>
                </section>
                <section className="input-container">
                  <span className="input-title">service type</span>
                  <input className="input-field"/>
                </section>
                <section className="input-container">
                  <span className="input-title">service charge</span>
                  <input className="input-field"/>
                </section>
              </div>
              {/* column two */}
              <div className="add-service-column">
                    <section className="input-container">
                        <span className="input-title">service description</span>
                        <input className="input-field"/>
                    </section>
                    <section className="input-container">
                        <span className="input-title">image</span>
                        <input type="file" name="" id="" className='input-field'/>
                    </section>
                    <div className="btn-container-add-item">
                      <button type='submit' className="submit-btn">Add Service Details</button>
                      <button type='reset' className="reset-btn">Reset</button>
                    </div>
              </div>
            </div>
        </form>
    </div>
    </AdminLayout>
  )
}

export default addService
