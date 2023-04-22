import React, { useEffect, useState } from 'react'
import './AddPayroll.scss'
import axios from 'axios'
import AdminLayout from '../Layouts/AdminLayout'


const AddPayroll = () => {

  const[staffId,setstaffId] =  useState("")
  const[otHours,setotHours] =  useState("")
  const[salary,setsalary] =  useState("")
  const[paymentStatus,setpaymentStatus] =  useState("")
  const[date,setdate] =  useState("")

  const staffPayrollHandler =(e) => {
    e.preventDefault()
    const payrollObj = {staffId,otHours,salary,paymentStatus,date}
    console.log(payrollObj);

    axios.post("http://localhost:4000/api/payroll/",payrollObj)
    .then((response)=>console.log(response))
    .catch((error)=>console.log(error))

    console.log("form submitted");
  }

  const [maxDate, setMaxDate] = useState(null)

  useEffect(() => {
    const date = new Date();
    setMaxDate(date.toISOString() .split("T")[0])
  }, [])

  // useEffect(() => {

  // }, [])


  return (
    <AdminLayout>
    <div className="add-item-container-main">
        {/* this is the form container */}
        <form className="add-payroll-form-container" onSubmit={staffPayrollHandler}>
            <span className="tagline-add-item"> Add Payroll Details</span>
            {/* input field container */} 
            <div className="column-container">
              {/* column one */}
              <div className="add-item-column">
                <section className="input-container">
                  <span className="input-title">Staff ID</span>
                  <input className="input-field" value={staffId} onChange={(e) => setstaffId(e.target.value)} required/>
                </section>
                <section className="input-container">
                  <span className="input-title">OT Hours</span>
                  <input className="input-field" value={otHours} onChange={(e) => setotHours(e.target.value)}type="number" required/>
                </section>
                <section className="input-container">
                  <span className="input-title">Salary</span>
                  <input className="input-field" value={salary} onChange={(e) => setsalary(e.target.salary)}type="text" required/>
                </section>
                <section className="input-container">
                  <span className="input-title">Payment Status</span>
                  <select className="input-field" value={paymentStatus} onChange={(e) => setpaymentStatus(e.target.value)} required>
                      <option className='select-option' value="">Select paymentstatus</option>
                      <option className='select-option' value="payed">Payed</option>
                      <option className='select-option' value="unpayed">Un payed</option>
                  </select>
                </section>
                <section className="input-container">
                  <span className="input-title">Date</span>
                  <input className="input-field" value={date} onChange={(e) => setdate(e.target.value)}type ='date' max={maxDate} required/>
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