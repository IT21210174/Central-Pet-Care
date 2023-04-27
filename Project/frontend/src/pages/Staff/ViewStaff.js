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

            
            </div>
        </AdminLayout>
    )
}

export default ViewStaff