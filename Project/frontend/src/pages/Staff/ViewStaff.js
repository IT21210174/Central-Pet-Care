import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import AdminLayout from '../Layouts/AdminLayout';
import { userRequest } from '../../requestMethods'
import { toast } from 'react-hot-toast';

import './ViewStaff.scss'

function ViewStaff() {

    const { id } = useParams()

    const [firstName,setfirstName] = useState("")
    const [lastName,setlastName] = useState("")
    const [address,setaddress] = useState("")
    const [nic,setnic] = useState("")
    const [contactNo,setcontactNo] = useState("")
    const [dob,setdob] = useState("")
    const [email,setemail] = useState("")
    const [staffId,setstaffId] = useState("")
    const [department,setdepartment] = useState("")
    const [joinedDate,setjoinedDate] = useState("")
    const [salary,setsalary] = useState("")
    const [imageURL, setImageURL] = useState('')

    useEffect(() => {
        userRequest.get('/staff/' + id)
        .then(res => {
            setfirstName(res.data.firstName)
            setlastName(res.data.lastName)
            setaddress(res.data.address)
            setnic(res.data.nic)
            setcontactNo(res.data.contactNo)
            setdob(res.data.dob)
            setemail(res.data.email)
            setstaffId(res.data.staffId)
            setdepartment(res.data.department)
            setjoinedDate(res.data.joinedDate)
            setsalary(res.data.salary)
           
            setImageURL(res.data.image)
        }).catch(err =>{
            toast.error(err.message)
        })
      }, [id])

    return (
        <AdminLayout>
            <div className='staff'>
            {/* <table>
                <tr>
                    <td colSpan='2' className='imageContainer'>
                        <img src={imageURL} className='image' height='120px' />
                    </td>
                </tr>
                
                <tr>
                    <td>First Name</td>
                    <td>{firstName}</td>
                </tr>
                <tr>
                    <td>Last Name</td>
                    <td>{lastName}</td>
                </tr>
                <tr>
                    <td>Address</td>
                    <td>{address}</td>
                </tr>
                <tr>
                    <td>NIC</td>
                    <td>{nic}</td>
                </tr>
                <tr>
                    <td>Contact No</td>
                    <td>{contactNo}</td>
                </tr>
                <tr>
                    <td>Date of Birth</td>
                    <td>{dob}</td>
                </tr>
                <tr>
                    <td>Email</td>
                    <td>{email}</td>
                </tr>
                <tr>
                    <td>Staff Id</td>
                    <td>{staffId}</td>
                </tr>
                <tr>
                    <td>Department</td>
                    <td>{department}</td>
                </tr>
                <tr>
                    <td>Joined Date</td>
                    <td>{joinedDate}</td>
                </tr>
                <tr>
                    <td>Salary</td>
                    <td>{salary}</td>
                </tr>
                
               
            </table> */}
            <div className='payroll-record-container'>
                    
                    <div className = "payroll-details-container">
                        <div className="payroll-prompts">
                            <span className='payroll-line-info'>First Name</span>
                            <span className='payroll-line-info'>Last Name</span>
                            <span className='payroll-line-info'>Address</span>
                            <span className='payroll-line-info'>NIC</span>
                            <span className='payroll-line-info'>Contact No</span>
                            <span className='payroll-line-info'>Date of Birth</span>
                            <span className='payroll-line-info'>Email</span>
                            <span className='payroll-line-info'>Staff Id</span>
                            <span className='payroll-line-info'>Department</span>
                            <span className='payroll-line-info'>Joined Date</span>
                            <span className='payroll-line-info'>Salary</span>
                        </div>
                        <div className="payroll-values">
                            <span className='payroll-line-info-values'>{firstName}</span>
                            <span className='payroll-line-info-values'>{lastName}</span>
                            <span className='payroll-line-info-values'>{address}</span>
                            <span className='payroll-line-info-values'>{nic}</span>
                            <span className='payroll-line-info-values'>{contactNo}</span>
                            <span className='payroll-line-info-values'>{dob}</span>
                            <span className='payroll-line-info-values'>{email}</span>
                            <span className='payroll-line-info-values'>{staffId}</span>
                            <span className='payroll-line-info-values'>{department}</span>
                            <span className='payroll-line-info-values'>{joinedDate}</span>
                            <span className='payroll-line-info-values'>{salary}</span>
                            {/* <span className='payroll-line-info-values'>{staffId}</span> */}
                        </div>
                    </div> 
                </div>

            
            </div>
        </AdminLayout>
    )
}

export default ViewStaff