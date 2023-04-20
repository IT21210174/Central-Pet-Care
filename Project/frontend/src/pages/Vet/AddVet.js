import React from 'react'
import './Addvet.scss'

import AdminLayout from '../Layouts/AdminLayout'

const Addvet = () => {
  return (
    <AdminLayout>
    <div className="add-item-container-main">
        {/* this is the form container */}
        <form className="add-item-form-container" onSubmit="">
            <span className="tagline-add-item">Fill the form for add vet</span>
            {/* input field container */}
            <div className="column-container">
              {/* column one */}
              <div className="add-item-column">
                <section className="input-container">
                  <span className="input-title">vcsl id</span>
                  <input className="input-field"/>
                </section>
                <section className="input-container">
                  <span className="input-title">veterinary surgeon name</span>
                  <input className="input-field"/>
                </section>
                <section className="input-container">
                  <span className="input-title">telephone</span>
                  <input className="input-field"/>
                </section>
                <section className="input-container">
                  <span className="input-title">email</span>
                  <input className="input-field"/>
                </section>
              </div>
              {/* column two */}
              <div className="add-item-column">
                     <section className="input-container">
                        <span className="input-title">experience</span>
                        <textarea className='input-textarea' id="" cols="30" rows="10"></textarea>
                    </section>
                    <section className="input-container">
                        <span className="input-title">qualification</span>
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

export default Addvet
