import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import AdminLayout from '../Layouts/AdminLayout';
import { userRequest } from '../../requestMethods'
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
            <table>
                
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
                
            </table>
            </div>
        </AdminLayout>
    )
}

export default ViewPrescription