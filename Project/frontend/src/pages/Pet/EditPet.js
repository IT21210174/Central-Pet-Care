import React, { useState, useEffect } from 'react';
import AdminLayout from '../Layouts/AdminLayout'
import './EditPet.scss'
import { userRequest } from '../../requestMethods'
import uploadImage from '../../uploadImage';
import { toast } from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';

function EditPet() {

  const { id } = useParams()
  const navigate = useNavigate()

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

  useEffect(() => {
    userRequest.get('/pets/' + id)
    .then(res => {
        setPetID(res.data.petID)
        setPetName(res.data.petName)
        setPetDob(res.data.dob)
        setPetGender(res.data.gender)
        setPetSpecies(res.data.species)
        setPetBreed(res.data.breed)
        setCustomerID(res.data.customerID)
        setCustomerName(res.data.customerName)
        setContactNumber(res.data.contactNumber)
        setMedicalHistory(res.data.medicalHistory)
        setImageURL(res.data.picture)

    }).catch(err =>{
        toast.error(err.message)
    })
  }, [id])


  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if(file ){
      const URL = await uploadImage(file)
      userRequest.put("/pets/" + id, { petID, petName, dob, gender, species, breed, customerID, customerName, contactNumber, medicalHistory, picture : URL  })
      .then(res => {
          toast.success('Pet updated')
          navigate('/admin/pets/managePet')
      }).catch(err => {
          toast.error(err.message)
      })
    }
    else {
      userRequest.put("/pets/" + id, { petID, petName, dob, gender, species, breed, customerID, customerName, contactNumber, medicalHistory, picture : imageURL })
      .then(res => {
          toast.success('Pet updated')
          navigate('/admin/pets/managePet')
      }).catch(err => {
          toast.error(err.message)
      })
    }
  }  
  
  const [maxDate, setMaxDate] = useState(null)

  useEffect(() => {
    const date = new Date();
    setMaxDate(date.toISOString().split("T")[0])
  }, [])

  return (
    <AdminLayout>
      <div className="edit-pet-container-main">
        {/* this is the form container */}
        <form className="edit-pet-form-container" onSubmit={handleSubmit}>
            <span className="tagline-edit-pet">Edit Pet</span>
            {/* input field container */}
            <div className="column-container">
              {/* column one */}
              <div className="edit-pet-column">
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
                  <input className="input-field" type="date" max={maxDate} value={dob} required onChange={(e) => setPetDob(e.target.value)}/>
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
                      <option className='select-option' >select </option>
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
               <div className="edit-pet-column">
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
                       <input className="input-field" type="tel" pattern="^\+94\d{9}$" value={contactNumber} required onChange={(e) => setContactNumber(e.target.value)}/>
                    </section>
                    <section className="input-container">
                       <span className="input-title">Medical History</span>
                       <textarea className='input-textarea' id="" cols="30" rows="10" value={medicalHistory} onChange={(e) => setMedicalHistory(e.target.value)}></textarea>
                    </section>
                    <section className="input-container">
                        <span className="input-title">Upload Image</span>
                        <input id="file-input" type="file" accept='.png, .jpeg, .jpg, .webp' className='input-field' onChange={(e) => setFile(e.target.files[0])}/>
                    </section>
                    <div className="btn-container-edit-pet">
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

export default EditPet