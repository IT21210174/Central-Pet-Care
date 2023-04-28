import React, { useState } from 'react';
import Select from 'react-select';
import AdminLayout from '../Layouts/AdminLayout'
import './AddService.scss'
import { userRequest } from '../../requestMethods'
import uploadImage from '../../uploadImage';
import { toast } from 'react-hot-toast';
import styled from 'styled-components';

const Wrapper = styled.section`
`;


function AddService() {
  
  const [serviceId, setserviceId] = useState('')
  const [serviceName, setservicetName] = useState('')
  const [serviceCharge, setserviceCharge] = useState('')
  const [serviceDescription, setserviceDescription] = useState('')
  const [file, setFile] = useState('')
  const [imageURL, setImageURL] = useState('')
 
  const handleReset = () => {

    setserviceId('')
    setservicetName('')
    setserviceCharge('')
    setserviceDescription('')
    setFile(null)
    
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    // Combine selected categories
    const imageURL = await uploadImage(file);
    userRequest.post("/services", { serviceId,serviceName,serviceCharge,serviceDescription,serviceImage: imageURL })
    .then(res => {
        toast.success('Service added')
        handleReset()
    }).catch(err => {
        toast.error(err.message)
    })

    console.log({ serviceId,serviceName,serviceCharge,serviceDescription,serviceImage: imageURL });
  }  



  return (
    <AdminLayout>
      <Wrapper>
      <div className="add-service-container-main">
        {/* this is the form container */}
        <form className="add-service-form-container" onSubmit={handleSubmit}>
            <span className="tagline-add-service">Add Service</span>
            {/* input field container */}
            <div className="column-container">
              {/* column one */}
              <div className="add-item-column">

                <section className="input-container">
                  <span className="input-title">Service ID</span>
                  <input type='text' className="input-field" value={serviceId} onChange={(e) => setserviceId(e.target.value)} required/>
                </section>

                <section className="input-container">
                  <span className="input-title">Service Name</span>
                  <input className="input-field" value={serviceName} onChange={(e) => setservicetName(e.target.value)} pattern="[a-zA-Z]+" required/>
                </section>

                <section className="input-container">
                        <span className="input-title">Service  Description</span>
                        <textarea className='input-textarea' id="" cols="30" rows="10" value={serviceDescription} onChange={(e) => setserviceDescription(e.target.value)} required></textarea>
                </section>

                <section className="input-container">
                        <span className="input-title">Service image</span>
                        <input id="file-input" type="file" accept='.png, .jpeg, .jpg, .webp' className='input-field' onChange={(e) => setFile(e.target.files[0])}/>
                </section>

                    <div className="btn-container-add-item">
                      <button type='submit' className="submit-btn">Submit</button>
                      <button type='reset' className="reset-btn" onClick={handleReset}>Reset</button>
                    </div>
                    </div>  

             
            </div>
        </form>
    </div>
    </Wrapper>
    </AdminLayout>

  )
}

export default AddService