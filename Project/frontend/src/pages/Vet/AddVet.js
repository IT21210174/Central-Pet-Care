import React, { useState } from 'react';
import AdminLayout from '../Layouts/AdminLayout'
import './Addvet.scss'
import { userRequest } from '../../requestMethods'
import uploadImage from '../../uploadImage';
import { toast } from 'react-hot-toast';

function AddVet() {

  const[vcslId , setVcsl] = useState("")
  const[vetName, setName] = useState("")
  const[telephone , setTelephone] = useState("")
  const[email, setEmail] = useState("")
  const[experience, setExperience] = useState("")
  const[qualification, setQualification] = useState("")
  const [file, setFile] = useState(null)
  const [imageURL, setImageURL] = useState('')

  const handleReset = () => {
    setVcsl('')
        setName('')
        setTelephone('')
        setEmail('')
        setExperience('')
        setQualification('')
        setFile(null)
    // Clear the value of the file input field
    document.getElementById('file-input').value = '';
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
   
    const imageURL = await uploadImage(file);
    userRequest.post("/vets", { vcslId, vetName, telephone, email, experience, qualification, profilePicture: imageURL })
    .then(res => {
        toast.success('Vet added')
        handleReset()
    }).catch(err => {
        toast.error(err.message)
    })
  }  


  return (
    <AdminLayout>
     <div className="add-item-container-main">
        {/* this is the form container */}
        <form className="add-item-form-container" onSubmit={handleSubmit}>
            <span className="tagline-add-item">Add New Veterinary Surgeon</span>
            {/* input field container */}
            <div className="column-container">
              {/* column one */}
              <div className="add-item-column">
                <section className="input-container">
                  <span className="input-title">vcsl id</span>
                  <input type="text" className="input-field" value={vcslId} onChange={(e) => setVcsl(e.target.value)}/>
                </section>
                <section className="input-container">
                  <span className="input-title">veterinary surgeon name</span>
                  <input type="text" className="input-field" value={vetName} onChange={(e) => setName(e.target.value)}/>
                </section>
                <section className="input-container">
                  <span className="input-title">telephone</span>
                  <input type="text" className="input-field" value={telephone} onChange={(e) => setTelephone(e.target.value)}/>
                </section>
                <section className="input-container">
                  <span className="input-title">email</span>
                  <input type="text" className="input-field" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </section>
              </div>
              {/* column two */}
              <div className="add-item-column">
                     <section className="input-container">
                        <span className="input-title">experience</span>
                        <textarea type="text" className='input-textarea' id="" cols="30" rows="10" value={experience} onChange={(e) => setExperience(e.target.value)}></textarea>
                    </section>
                    <section className="input-container">
                        <span className="input-title">qualification</span>
                        <textarea type="text" className='input-textarea' id="" cols="30" rows="10" value={qualification} onChange={(e) => setQualification(e.target.value)}></textarea>
                    </section>
                    <section className="input-container">
                        <span className="input-title">profile picture</span>
                        <input type="file" id="file-input" className='input-field' accept='.png, .jpeg, .jpg, .webp'  onChange={(e) => setFile(e.target.files[0])} required/>
                    </section>
                    <div className="btn-container-add-item">
                      <button type='submit' className="submit-btn">Submit</button>
                      <button type='reset' className="reset-btn" onClick={handleReset}>Reset</button>
                    </div>
              </div>
            </div>
        </form>
    </div>
    </AdminLayout>

  )
}

export default AddVet