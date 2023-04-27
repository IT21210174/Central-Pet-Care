import React, { useState } from 'react';
import AdminLayout from '../Layouts/AdminLayout'
import './AddPet.scss'
import { userRequest } from '../../requestMethods'
import uploadImage from '../../uploadImage';
import { toast } from 'react-hot-toast';



function AddPet() {

  const [petID, setPetID] = useState("")
  const [petName, setPetName] = useState("")
  const [dob, setPetDob] = useState("")
  const [gender, setPetGender] = useState("")
  const [species, setPetSpecies] = useState("")
  const [breed, setPetBreed] = useState("")
  const [customerID, setCustomerID] = useState("")
  const [customerName, setCustomerName] = useState("")
  const [contactNumber, setContactNumber] = useState("")
  const [medicalHistory, setMedicalHistory] = useState("")
  const [file, setFile] = useState(null)
  const [imageURL, setImageURL] = useState('')
 
  const handleReset = () => {
        setPetID('')
        setPetName('')
        setPetDob('')
        setPetGender('')
        setPetSpecies('')
        setPetBreed('')
        setCustomerID('')
        setCustomerName('')
        setContactNumber('')
        setMedicalHistory('')
        setFile(null)
       
    // Clear the value of the file input field
    document.getElementById('file-input').value = '';
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
   
    const imageURL = await uploadImage(file);
  
    userRequest.post("/pets", {petID, petName,dob, gender,species, breed, customerID, customerName,contactNumber,medicalHistory, picture : imageURL })
    .then(res => {
        toast.success('Pet added')
        handleReset()
    }).catch(err => {
        toast.error(err.message)
    })
  }  


  return (
    <AdminLayout>
      
    <div className="add-pet-container-main">
        {/* this is the form container */}
        <form className="add-item-form-container" onSubmit={handleSubmit}>
            <span className="tagline-add-item">Add Pet</span>
            {/* input field container */}
            <div className="column-container">
              {/* column one */}
              <div className="add-pet-column">
                <section className="input-container"> 
                  <span className="input-title">Pet ID</span>
                  <input className="input-field" value={petID} required onChange={(e) => setPetID(e.target.value)}/>
                </section>
                <section className="input-container">
                  <span className="input-title">Pet Name</span>
                  <input className="input-field" value={petName} required onChange={(e) => setPetName(e.target.value)}/>
                </section>
                <section className="input-container">
                  <span className="input-title">DOB</span>
                  <input className="input-field" type="date" pattern="\d{1,2}/\d{1,2}/\d{4}" value={dob} required onChange={(e) => setPetDob(e.target.value)}/>
                </section>
                <section className="input-container">
                  <span className="input-title">Gender</span>
                  <select className="input-field" value={gender} onChange={(e) => setPetGender(e.target.value)}>
                      <option className='select-option'>select</option>
                      <option className='select-option' >Male</option>
                      <option className='select-option' >Female</option>
                  </select>
                </section>
                <section className="input-container">
                  <span className="input-title">Species</span>
                  <select className="input-field" value={species} onChange={(e) => setPetSpecies(e.target.value)}>
                      <option className='select-option'>select</option>
                      <option className='select-option' >Dog</option>
                      <option className='select-option' >Cat</option>
                      <option className='select-option' >Bird</option>
                      <option className='select-option' >Rabbit</option>
                      <option className='select-option' >Guinea Pig</option>
                      <option className='select-option' >Hamster</option>
                      <option className='select-option' >Reptile</option>
                      <option className='select-option' >Fish</option>
                      
                  </select>
                  </section>
                <section className="input-container">
                  <span className="input-title">breed</span>
                  <input className="input-field" value={breed} onChange={(e) => setPetBreed(e.target.value)}/>
                </section>
              </div>
              {/* column two */}
               <div className="add-item-column">
                   <section className="input-container">
                      <span className="input-title">customer ID</span>
                      <input className="input-field"  value={customerID} required onChange={(e) => setCustomerID(e.target.value)}/>
                    </section>
                    <section className="input-container">
                       <span className="input-title">customer Name</span>
                       <input className="input-field" value={customerName} required onChange={(e) => setCustomerName(e.target.value)}/>
                    </section>
                    <section className="input-container">
                       <span className="input-title">Contact Number</span>
                       <input className="input-field" type="tel" pattern="^\+94\d{9}$"  value={contactNumber} required onChange={(e) => setContactNumber(e.target.value)}/>
                    </section>
                    <section className="input-container">
                       <span className="input-title">Medical History</span>
                       <textarea className='input-textarea' id="" cols="30" rows="10" value={medicalHistory} onChange={(e) => setMedicalHistory(e.target.value)}></textarea>
                    </section>
                    <section className="input-container">
                        <span className="input-title">Upload Image</span>
                        <input id="file-input" type="file" accept='.png, .jpeg, .jpg, .webp' className='input-field' required onChange={(e) => setFile(e.target.files[0])}/>
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

export default AddPet