import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import AdminLayout from '../Layouts/AdminLayout';
import { userRequest } from '../../requestMethods'
import { toast } from 'react-hot-toast';

import './ViewRecord.scss'

function ViewRecord() {

    const { id } = useParams()

    //const [recordId, setrecordId] = useState('')
    const [serviceId, setserviceId] = useState('')
    const [customerId, setcustomerId] = useState('')
    const [vcslId, setvcslId] = useState('')
    const [petId, setpetId] = useState('')
    const [date, setdate] = useState('')
    const [serviceCharge, setserviceCharge] = useState('')

    useEffect(() => {
        userRequest.get('/servicerecords/' + id)
        .then(res => {
            
            //setrecordId(res.data.recordId)
            setserviceId(res.data.serviceId)
            setcustomerId(res.data.customerId)
            setvcslId(res.data.vcslId)
            setpetId(res.data.petId)
            setdate(res.data.date)
            setserviceCharge(res.data.serviceCharge)
        }).catch(err =>{
            toast.error(err.message)
        })
      }, [id])

    return (
        <AdminLayout>
            <div className='record'>
            <table>
                <tr>
                    <td>Service ID</td>
                    <td>{serviceId}</td>
                </tr>
                <tr>
                    <td>Customer ID</td>
                    <td>{customerId}</td>
                </tr>
                <tr>
                    <td>VCSL ID</td>
                    <td>{vcslId}</td>
                </tr>
                <tr>
                    <td>Pet ID</td>
                    <td>{petId}</td>
                </tr>
                <tr>
                    <td>Date</td>
                    <td>{date}</td>
                </tr>
                <tr>
                    <td>Service Charge</td>
                    <td>{serviceCharge}</td>
                </tr>
            </table>
            </div>
        </AdminLayout>
    )
}

export default ViewRecord