import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import AdminLayout from '../Layouts/AdminLayout'
import './EditPrescription.scss'
import { userRequest } from '../../requestMethods'
import { toast } from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';

function EditPrescription() {

  const { id } = useParams()
  const navigate = useNavigate()


  const[petname , setPetName] = useState("")
  const[address, setAddress] = useState("")
  const[description , setDescription] = useState("")
  const[medicine, setMedicine] = useState("")
  const[dosage, setDosage] = useState("")


  useEffect(() => {
    userRequest.get('/prescriptions/' + id)
    .then(res => {
        setPetName(res.data.petname)
        setAddress(res.data.address)
        setDescription(res.data.description)
        setMedicine(res.data.medicine)
        setDosage(res.data.dosage)
    }).catch(err =>{
        toast.error(err.message)
    })
  }, [id])


  const handleSubmit = async (e) => {
    e.preventDefault()
    
      userRequest.put("/prescriptions/" + id, { petname, address, description, medicine, dosage })
      .then(res => {
          toast.success('Prescription updated')
          navigate('/prescriptions/ManageaPrescription')
      }).catch(err => {
          toast.error(err.message)
      })
    
  }  


  return (
    <AdminLayout>
      <div className="add-item-container-main">
        {/* this is the form container */}
        <form className="add-item-form-container" onSubmit={handleSubmit}>
            <span className="tagline-add-item">Edit Prescription</span>
            {/* input field container */}
            <div className="column-container">
              {/* column one */}
              <div className="add-item-column">
                <section className="input-container">
                  <span className="input-title">pet name</span>
                  <input type="text" className="input-field" value={petname} onChange={(e) => setPetName(e.target.value)}/>
                </section>
                <section className="input-container">
                  <span className="input-title">address</span>
                  <input type="text" className="input-field" value={address} onChange={(e) => setAddress(e.target.value)}/>
                </section>
                <section className="input-container">
                        <span className="input-title">description</span>
                        <textarea type="text" className='input-textarea' id="" cols="30" rows="10" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                    </section>
               
              </div>
              {/* column two */}
              <div className="add-item-column">
              <section className="input-container">
                  <span className="input-title">medicine</span>
                  <input type="text" className="input-field" value={medicine} onChange={(e) => setMedicine(e.target.value)}/>
                </section>
                <section className="input-container">
                  <span className="input-title">dosage</span>
                  <input type="text" className="input-field" value={dosage} onChange={(e) => setDosage(e.target.value)}/>
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

export default EditPrescription