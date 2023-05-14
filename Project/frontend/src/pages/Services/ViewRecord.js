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
                
            {/* <table>
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
            </table> */}
             <div className='record-container'>
                    
                    <div className = "record-details-container">
                        <div className="record-prompts">
                            <span className='record-line-info'>Service ID</span>
                            <span className='record-line-info'>Customer ID</span>
                            <span className='record-line-info'>VCSL ID</span>
                            <span className='record-line-info'>Pet ID</span>
                            <span className='record-line-info'>Date</span>
                            <span className='record-line-info'>Service Charge</span>
                            

                        </div>
                        <div className="record-values">
                            <span className='record-line-info-values'>{serviceId}</span>
                            <span className='record-line-info-values'>{customerId}</span>
                            <span className='record-line-info-values'>{vcslId}</span>
                            <span className='record-line-info-values'>{petId}</span>
                            <span className='record-line-info-values'>{date}</span>
                            <span className='record-line-info-values'>{serviceCharge}</span>
                           
                        </div>
                    </div> 
                </div>
            </div>
        </AdminLayout>
    )
}

export default ViewRecord