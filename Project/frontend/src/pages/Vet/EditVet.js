import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import AdminLayout from '../Layouts/AdminLayout'
import './EditVet.scss'
import { userRequest } from '../../requestMethods'
import uploadImage from '../../uploadImage';
import { toast } from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';

function EditVet() {

  const { id } = useParams()
  const navigate = useNavigate()


  const[vcslId , setVcsl] = useState("")
  const[vetName, setName] = useState("")
  const[telephone , setTelephone] = useState("")
  const[email, setEmail] = useState("")
  const[experience, setExperience] = useState("")
  const[qualification, setQualification] = useState("")
  const [file, setFile] = useState(null)
  const [imageURL, setImageURL] = useState('')

  useEffect(() => {
    userRequest.get('/vets/' + id)
    .then(res => {
        setVcsl(res.data.vcslId)
        setName(res.data.vetName)
        setTelephone(res.data.telephone)
        setEmail(res.data.email)
        setExperience(res.data.experience)
        setQualification(res.data.qualification)
        setImageURL(res.data.profilePicture)
    }).catch(err =>{
        toast.error(err.message)
    })
  }, [id])


  const handleSubmit = async (e) => {
    e.preventDefault()
    // Combine selected categories
   
    if(file ){
      const URL = await uploadImage(file)
      userRequest.put("/vets/" + id, { vcslId, vetName, telephone, email, experience, qualification, profilePicture: imageURL })
      .then(res => {
          toast.success('Vet updated')
          navigate('/vets/manageVets')
      }).catch(err => {
          toast.error(err.message)
      })
    }
    else {
      userRequest.put("/vets/" + id, { vcslId, vetName, telephone, email, experience, qualification, profilePicture: imageURL })
      .then(res => {
          toast.success('Vet updated')
          navigate('/vets/manageVets')
      }).catch(err => {
          toast.error(err.message)
      })
    }
  }  


  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      width: '400px',
      margin: '10px 0 15px 0',
      border: '2px solid $primary-color-navyBlue',
      backgroundColor: 'white',
      borderRadius: '8px',
      borderColor: state.isFocused ? '#7D5FFF' : '#2C2C54',
      boxShadow: state.isFocused ? '0 0 0 1px #7D5FFF' : '0 0 0 1px #2C2C54',
    }),
    menu: (provided, state) => ({
      ...provided,
      backgroundColor: 'white',
      margin: '-10px 0 0 0',
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? '#7D5FFF' : 'white',
      color: state.isSelected ? 'white' : 'black',
      '&:hover': {
        backgroundColor: 'lightgray',
      },
    }),
  };


  return (
    <AdminLayout>
      <div className="add-item-container-main">
        {/* this is the form container */}
        <form className="add-item-form-container" onSubmit={handleSubmit}>
            <span className="tagline-add-item">Edit Vet</span>
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

export default EditVet