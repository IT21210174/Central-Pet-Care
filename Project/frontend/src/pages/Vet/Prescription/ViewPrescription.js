import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import AdminLayout from '../../Layouts/AdminLayout';
import { userRequest } from '../../../requestMethods'
import { toast } from 'react-hot-toast';

import './ViewPrescription.scss'

function ViewPrescription() {

    const { id } = useParams()

    const[petname , setPetaName] = useState("")
    const[address, setAddress] = useState("")
    const[description , setDescription] = useState("")
    const[medicine, setMedicine] = useState("")
    const[dosage, setDosage] = useState("")

    useEffect(() => {
        userRequest.get('/prescriptions/' + id)
        .then(res => {
         setPetaName(res.data.petname)
        setAddress(res.data.address)
        setDescription(res.data.description)
        setMedicine(res.data.medicine)
        setDosage(res.data.dosage)
        }).catch(err =>{
            toast.error(err.message)
        })
      }, [id])

    return (
        <AdminLayout>
            <div className='product'>
                
            {/* <table>
                
                <tr>
                    <td>pet name</td>
                    <td>{petname}</td>
                </tr>
                <tr>
                    <td>address</td>
                    <td>{address}</td>
                </tr>
                <tr>
                    <td>description</td>
                    <td>{description}</td>
                </tr>
                <tr>
                    <td>medicine</td>
                    <td>{medicine}</td>
                </tr>
                <tr>
                    <td>dosage</td>
                    <td>{dosage}</td>
                </tr>
                
            </table> */}

            <div className='prescription-record-container'>
                    
                    <div className = "prescription-details-container">
                        
                        <div className="prescription-prompts">
                            <span className='prescription-line-info'>Pet Name</span>
                            <span className='prescription-line-info'>Address</span>
                            <span className='prescription-line-info'>Description </span>
                            <span className='prescription-line-info'>Medicine</span>
                            <span className='prescription-line-info'>Dosage </span>
                        </div>
                        <div className="prescription-values">
                            <span className='prescription-line-info-values'>{petname}</span>
                            <span className='prescription-line-info-values'>{address}</span>
                            <span className='prescription-line-info-values'>{description}</span>
                            <span className='prescription-line-info-values'>{medicine}</span>
                            <span className='prescription-line-info-values'>{dosage}</span>
                        </div>
                    </div> 
                </div>

            </div>
        </AdminLayout>
    )
}

export default ViewPrescription