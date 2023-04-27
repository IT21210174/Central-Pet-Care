import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import AdminLayout from '../Layouts/AdminLayout'
import './EditService.scss'
import { userRequest } from '../../requestMethods'
import uploadImage from '../../uploadImage';
import { toast } from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.section`
`;


function EditService() {

  const { id } = useParams()
  const navigate = useNavigate()

  const [serviceId, setserviceId] = useState('')
  const [serviceName, setservicetName] = useState('')
  const [serviceCharge, setserviceCharge] = useState('')
  const [serviceDescription, setserviceDescription] = useState('')
  const [file, setFile] = useState(null)
  const [imageURL,setImageURL]=useState('')

  useEffect(() => {
    userRequest.get('/services/' + id)
    .then(res => {
        setserviceId(res.data.serviceId)
        setservicetName(res.data.serviceName)
        setserviceCharge(res.data.serviceCharge)
        setserviceDescription(res.data.serviceDescription)
        setImageURL(res.data.serviceImage)
    }).catch(err =>{
        toast.error(err.message)
    })
  }, [id])


  const handleSubmit = async (e) => {
    e.preventDefault()
    // Combine selected categories
  
    if(file ){
      const URL = await uploadImage(file)
      userRequest.put("/services/" + id, { serviceId,serviceName,serviceCharge,serviceDescription,serviceImage: URL })
      .then(res => {
          toast.success('Service updated')
          navigate('/admin/service/ManageServices')
      }).catch(err => {
          toast.error(err.message)
          console.log(err.message)
      })
    }
    else {
      userRequest.put("/services/" + id, { serviceId, serviceName, serviceCharge, serviceDescription, serviceImage: imageURL })
      .then(res => {
          toast.success('Service updated')
          navigate('/admin/service/ManageServices')
      }).catch(err => {
          toast.error(err.message)
      })
    }
  } 




  return (
    <AdminLayout>
      <Wrapper>
      <div className="add-service-container-main">
        {/* this is the form container */}
        <form className="add-service-form-container" onSubmit={handleSubmit}>
            <span className="tagline-add-service">Edit Service</span>
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
                  <input type='text' className="input-field" value={serviceName} onChange={(e) => setservicetName(e.target.value)} required/>
                </section>

                <section className="input-container">
                        <span className="input-title">Service  Description</span>
                        <textarea className='input-textarea' id="" cols="30" rows="10" value={serviceDescription} onChange={(e) => setserviceDescription(e.target.value)} required></textarea>
                </section>

                <section className="input-container">
                        <span className="input-title">Service image</span>
                        <input id="file-input" type="file" accept='.png, .jpeg, .jpg, .webp' className='input-field' onChange={(e) => setFile(e.target.files[0])} />
                </section>


                    <div className="btn-container-add-item">
                      <button type='submit' className="submit-btn">Update</button>
                      <button type='reset' className="reset-btn">Reset</button>
                    </div>

              </div>
            </div>
        </form>
    </div>
    </Wrapper>
    </AdminLayout>

  )
}

export default EditService