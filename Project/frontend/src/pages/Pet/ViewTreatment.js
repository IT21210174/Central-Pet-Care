import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import AdminLayout from '../Layouts/AdminLayout';
import { userRequest } from '../../requestMethods'
import { toast } from 'react-hot-toast';

import './ViewTreatment.scss'

function ViewTreatment() {

    const { id } = useParams()
    const [petID, setPetID] = useState('')
    const [petName, setPetName] = useState('')
    const [customerID, setCustomerID] = useState('')
    const [date, setDate] = useState('')
    const [treatment, setTreatment] = useState('')
    const [progressNotes, setProgressNotes] = useState('')
    
    useEffect(() => {
        userRequest.get('/treatments/' + id)
        .then(res => {
            setPetID(res.data.petID)
            setPetName(res.data.petName)
            setCustomerID(res.data.customerID)
            setDate(res.data.date)
            setTreatment(res.data.treatment)
            setProgressNotes(res.data.progressNotes)
       
        }).catch(err =>{
            toast.error(err.message)
        })
      }, [id])

    return (
        <AdminLayout>
            <div className='service'>
            {/* <table>
                <tr>
                    <td>Pet ID</td>
                    <td>{petID}</td>
                </tr>
                <tr>
                    <td>Pet Name</td>
                    <td>{petName}</td>
                </tr>
                <tr>
                    <td>Customer ID</td>
                    <td>{customerID}</td>
                </tr>
                <tr>
                    <td>Date</td>
                    <td>{date}</td>
                </tr>
                <tr>
                    <td>Treatment</td>
                    <td>{treatment}</td>
                </tr>
                <tr>
                    <td>Progress Notes</td>
                    <td>{progressNotes}</td>
                </tr>
                
            </table>
            </div> */} 
            <div className='service-record-container'>

                    <div className = "service-details-container">
                        <div className="service-prompts">
                            <span className='service-line-info'>Pet ID</span>
                            <span className='service-line-info'>Pet Name</span>
                            <span className='service-line-info'>Customer ID</span>
                            <span className='service-line-info'>Date</span>
                            <span className='service-line-info'>Treatment</span>
                            <span className='service-line-info'>Progress Notes</span>

                            
                        </div>
                        <div className="service-values">
                            <span className='service-line-info-values'>{petID}</span>
                            <span className='service-line-info-values'>{petName}</span>
                            <span className='service-line-info-values'>{customerID}</span>
                            <span className='service-line-info-values'>{date}</span>
                            <span className='service-line-info-values'>{treatment}</span>
                            <span className='service-line-info-values'>{progressNotes}</span>

                        </div>
                    </div> 
                </div>
        </div>
        </AdminLayout>
    )
}

export default ViewTreatment