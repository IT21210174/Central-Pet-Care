import React, { useState } from 'react'
import './AddStaff.scss'
import axios from 'axios'
import AdminLayout from '../Layouts/AdminLayout'

const AddStaff = () => {
  const [firstName,setfirstName] = useState("")
  const [lastName,setlastName] = useState("")
  const [address,setaddress] = useState("")
  const [nic,setnic] = useState("")
  const [contactNo,setcontactNo] = useState("")
  const [dob,setdob] = useState("")
  const [email,setemail] = useState("")
  const [staffId,setstaffId] = useState("")
  const [department,setdepartment] = useState("")
  const [joinedDate,setjoinedDate] = useState("")
  const [salary,setsalary] = useState("")
  const [simage,setsimage] = useState("")

  const staffHandler = (e) => {
    e.preventDefault()
    const staffObj = {firstName, lastName, address, nic, contactNo, dob, email, department, joinedDate, salary, simage}
    console.log(staffObj);

    axios.post("http://localhost:4000/api/staff/",staffObj)
    .then((response)=>console.log(response))
    .catch((error)=>console.log(error))

    console.log("form submitted");
  }
  

  return (
    <AdminLayout>
    <div className="add-item-container-main">
        {/* this is the form container */}
        <form className="add-item-form-container" onSubmit={staffHandler}>
            <span className="tagline-add-item"> Add Staff Member</span>
            {/* input field container */}
            <div className="column-container">
              {/* column one */}
              <div className="add-item-column">
                <section className="input-container">
                  <span className="input-title">First Name</span>
                  <input className="input-field" value={firstName} onChange={(e) => setfirstName(e.target.value)} pattern="[a-zA-Z]+" required/>
                </section>
                <section className="input-container">
                  <span className="input-title">Address</span>
                  <input className="input-field" value={address} onChange={(e) => setaddress(e.target.value)} required/>
                </section>
                <section className="input-container">
                  <span className="input-title">Contact No</span>
                  <input className="input-field" type="tel" value={contactNo} onChange={(e) => setcontactNo(e.target.value)} title="Add valid contact Num" required/>
                </section>
                <section className="input-container">
                  <span className="input-title">Email</span>
                  <input className="input-field" value={email} onChange={(e) => setemail(e.target.value)} type="email" title="Add valid email eg:- johndoe@gmail.com" required/>
                </section>
                <section className="input-container">
                  <span className="input-title">Department</span>
                  <input className="input-field" value={department} onChange={(e) => setdepartment(e.target.value)} required/>
                </section>
                <section className="input-container">
                  <span className="input-title">Salary</span>
                  <input className="input-field" value={salary} onChange={(e) => setsalary(e.target.value)} type="text" pattern="[0-9]*[.]?[0-9]{0,2}" required/>
                </section>
              </div>
              {/* column two */}
              <div className="add-item-column">
                    <section className="input-container">
                        <span className="input-title">Last Name</span>
                        <input className="input-field" value={lastName} onChange={(e) => setlastName(e.target.value)} pattern="[a-zA-Z]+" required/>
                    </section>
                    <section className="input-container">
                        <span className="input-title">NIC</span>
                        <input className="input-field" value={nic} onChange={(e) => setnic(e.target.value)} pattern="^([0-9]{9}[x|X|v|V]|[0-9]{12})$" required/>
                    </section>
                    <section className="input-container">
                        <span className="input-title">Date Of Birth</span>
                        <input className="input-field" value={dob} onChange={(e) => setdob(e.target.value)} type="date" required/>
                    </section>
                    <section className="input-container">
                        <span className="input-title">Staff ID</span>
                        <input className="input-field" value={staffId} onChange={(e) => setstaffId(e.target.value)} required/>
                    </section>
                    <section className="input-container">
                        <span className="input-title">Joined Date</span>
                        <input className="input-field" value={joinedDate} onChange={(e) => setjoinedDate(e.target.value)} type="date" required/>
                    </section>
                    <section className="input-container">
                        <span className="input-title">Staff Member Image</span>
                        <input type="file" value={simage} onChange={(e) => setsimage(e.target.value)} name="" id="" className='input-field'required/>
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