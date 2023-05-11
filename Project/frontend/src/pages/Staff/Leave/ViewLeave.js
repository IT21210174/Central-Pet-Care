import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import AdminLayout from '../../Layouts/AdminLayout';
import { userRequest } from '../../../requestMethods'
import { toast } from 'react-hot-toast';

import './ViewLeave.scss'

function ViewLeave() {

    const { id } = useParams()

    const [staffId,setStaffID] = useState("")
    const [leaveType,setleaveType] = useState("")
    const [reason,setreason] = useState("")
    const [leaveFrom,setleaveFrom] = useState("")
    const [leaveTo,setleaveTo] = useState("")

    useEffect(() => {
        userRequest.get('/leave/' + id)
        .then(res => {
          setStaffID(res.data.staffId)
          setleaveType(res.data.leaveType)
          setreason(res.data.reason)
          setleaveFrom(res.data.leaveFrom)
          setleaveTo(res.data.leaveTo)
          
        }).catch(err =>{
            toast.error(err.message)
        })
      }, [id])

    return (
        <AdminLayout>
            {/* <div className='leave'>
            <table>
               
                <tr>
                    <td> ID</td>
                    <td>{id}</td>
                </tr>
                <tr>
                    <td>Staff Id</td>
                    <td>{staffId}</td>
                </tr>
                <tr>
                    <td>Leave Type</td>
                    <td>{leaveType}</td>
                </tr>
                <tr>
                    <td>Reason</td>
                    <td>{reason}</td>
                </tr>
                <tr>
                    <td>Leave From</td>
                    <td>{leaveFrom}</td>
                </tr>
                <tr>
                    <td>To</td>
                    <td>{leaveTo}</td>
                </tr>
                
            </table>
            </div> */}

            <div className="main-view-leaves">
                <div className="leave-table">
                <div className="leave-headings">
                    <span className="staff-leave-prompts">Staff ID</span>
                    <span className="staff-leave-prompts">Leave Type</span>
                    <span className="staff-leave-prompts">Reason</span>
                    <span className="staff-leave-prompts">Leave From</span>
                    <span className="staff-leave-prompts">To</span>
                </div>
                <div className="leave-heading-values">
                    <span className="staff-leave-prompts-values">{staffId}</span>
                    <span className="staff-leave-prompts-values">{leaveType}</span>
                    <span className="staff-leave-prompts-values">{reason}</span>
                    <span className="staff-leave-prompts-values">{leaveFrom}</span>
                    <span className="staff-leave-prompts-values">{leaveTo}</span>
                </div>
                </div>
            </div>

        </AdminLayout>
    )
}

export default ViewLeave