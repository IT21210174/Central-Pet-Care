import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import AdminLayout from '../Layouts/AdminLayout';
import { userRequest } from '../../requestMethods'
import { toast } from 'react-hot-toast';

import './ViewPet.scss'

function ViewPet() {

    const { id } = useParams()
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

    return (
        <AdminLayout>
             <div className='service'>
            {/* <table>
                <tr>
                    <td colSpan='2' className='imageContainer'>
                        <img src={imageURL} className='image' height='120px' />
                    </td>
                </tr>
                <tr>
                    <td>Service ID</td>
                    <td>{serviceId}</td>
                </tr>
                <tr>
                    <td>Service Name</td>
                    <td>{serviceName}</td>
                </tr>
                <tr>
                    <td>Service Charge</td>
                    <td>{serviceCharge}</td>
                </tr>
                <tr>
                    <td>Service Description</td>
                    <td style={{whiteSpace: 'pre-wrap'}}>{serviceDescription}</td>
                </tr>
                
            </table> */}

                <div className='service-record-container'>
                    <div className = "service-pic-container">
                        <img src={imageURL} className='service-img'></img>
                    </div>
                    <div className = "service-details-container">
                        <div className="service-prompts">
                            <span className='service-line-info'>Pet ID</span>
                            <span className='service-line-info'>Pet Name</span>
                            <span className='service-line-info'>DOB</span>
                            <span className='service-line-info'>Gender</span>
                            <span className='service-line-info'>Species</span>
                            <span className='service-line-info'>Breed</span>
                            <span className='service-line-info'>Customer ID</span>
                            <span className='service-line-info'>Customer Name</span>
                            <span className='service-line-info'>Contact Number</span>
                            <span className='service-line-info'>Medical History</span>
                            
                        </div>
                        <div className="service-values">
                            <span className='service-line-info-values'>{petID}</span>
                            <span className='service-line-info-values'>{petName}</span>
                            <span className='service-line-info-values'>{dob}</span>
                            <span className='service-line-info-values'>{gender}</span>
                            <span className='service-line-info-values'>{species}</span>
                            <span className='service-line-info-values'>{breed}</span>
                            <span className='service-line-info-values'>{customerID}</span>
                            <span className='service-line-info-values'>{customerName}</span>
                            <span className='service-line-info-values'>{contactNumber}</span>
                            <span className='service-line-info-values'>{medicalHistory}</span>
                        </div>
                    </div> 
                </div>

            </div>
        </AdminLayout>
    )
}

export default ViewPet