import React, { useState } from 'react'
import './AddLeave.scss'
import axios from 'axios'
import AdminLayout from '../Layouts/AdminLayout'


const AddLeave = () => {
  const [staffId,setStaffID] = useState("")
  const [leaveType,setleaveType] = useState("")
  const [reason,setreason] = useState("")
  const [leaveFrom,setleaveFrom] = useState("")
  const [leaveTo,setleaveTo] = useState("")

const staffLeaveHandler = (e) => {
  e.preventDefault()
  const leaveObj = {staffId,leaveType,reason,leaveFrom,leaveTo}
  console.log(leaveObj);

  axios.post("http://localhost:4000/api/leave/",leaveObj)
  .then((response)=>console.log(response))
  .catch((error)=>console.log(error))

  console.log("form submitted");
}
  return (
    <AdminLayout>
    <div className="add-item-container-main">
        {/* this is the form container */}
        <form className="add-leave-form-container" onSubmit={staffLeaveHandler}>
            <span className="tagline-add-item"> Leave Request Form</span>
            {/* input field container */}
            <div className="column-container">
              {/* column one */}
              <div className="add-item-column">
                <section className="input-container">
                  <span className="input-title">Staff ID</span>
                  <input className="input-field" value={staffId} onChange={(e) => setStaffID(e.target.value)} required/>
                </section>
                <section className="input-container">
                  <span className="input-title">Leave Type</span>
                  <select className="input-field" value={leaveType} onChange={(e) => setleaveType(e.target.value)} required>
                      <option className='select-option' value="">Select Leave Type</option>
                      <option className='select-option' value="half-leave">Half leave</option>
                      <option className='select-option' value="full-leave">Full leave</option>
                  </select>
                </section>
                <section className="input-container">
                  <span className="input-title">Reason</span>
                  
                  <input className="input-field" value={reason} onChange={(e) => setreason(e.target.value)} required/>
                </section>
                <section className="input-container">
                  <span className="input-title">Leave Reqested</span>
                  <span className="input-title">From</span>
                  <input className="input-field" value={leaveFrom} onChange={(e) => setleaveFrom(e.target.value)} type='date' required/>
                </section>
                <section className="input-container">
                  <span className="input-title">To</span>
                  <input className="input-field" value={leaveTo} onChange={(e) => setleaveTo(e.target.value)} type='date' required/>
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