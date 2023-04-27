import React, { useState } from 'react';
import AdminLayout from '../Layouts/AdminLayout'
import './AddTreatments.scss'
import { userRequest } from '../../requestMethods'
import { toast } from 'react-hot-toast';


const AddTreatments = () => {

   const [petID, setPetID] = useState('')
   const [petName, setPetName] = useState('')
   const [customerID, setCustomerID] = useState('')
   const [date, setDate] = useState('')
   const [treatment, setTreatment] = useState('')
   const [progressNotes, setProgressNotes] = useState('')

   const handleReset = () => {
    setPetID('')
    setPetName('')
    setCustomerID('')
    setDate('')
    setTreatment('')
    setProgressNotes('')

}
const handleSubmit = async (e) => {
  e.preventDefault()
 
  userRequest.post("/treatments", { petID, petName, customerID,date, treatment,progressNotes })
  .then(res => {
      toast.success('Treatment added')
      handleReset()
  }).catch(err => {
      toast.error(err.message)
  })
}  
  
  return (
    <AdminLayout>

    <div className="add-treat-container-main">
        {/* this is the form container */}
        <form className="add-treat-form-container" onSubmit={handleSubmit}>
            <span className="tagline-add-treat">Add Treatment</span>
            {/* input field container */}
            
              {/* column one */}
              <div className="add-treat-column">
                <section className="input-container"> 
                  <span className="input-title">Pet ID</span>
                  <input className="input-field" value={petID} required onChange={(e) => setPetID(e.target.value)}/>
                </section>
                <section className="input-container"> 
                  <span className="input-title">Pet Name</span>
                  <input className="input-field" value={petName} required onChange={(e) => setPetName(e.target.value)}/>
                </section>
                <section className="input-container"> 
                  <span className="input-title">Customet ID</span>
                  <input className="input-field" value={customerID} required onChange={(e) => setCustomerID(e.target.value)}/>
                </section>
               
                <section className="input-container">
                  <span className="input-title">Date</span>
                  <input className="input-field" type="date" id="date" name="date" pattern="\d{1,2}/\d{1,2}/\d{4}" value={date} required onChange={(e) => setDate(e.target.value)}/>
                </section>
              
               <section className="input-container">
                  <span className="input-title">Treatments</span>
                  <textarea className='input-textarea' id="" cols="30" rows="10" value={treatment} required onChange={(e) => setTreatment(e.target.value)}></textarea>
                </section>
               
                <section className="input-container">
                  <span className="input-title">Progress Notes</span>
                  <textarea className='input-textarea' id="" cols="30" rows="10" value={progressNotes} required onChange={(e) => setProgressNotes(e.target.value)}></textarea>
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