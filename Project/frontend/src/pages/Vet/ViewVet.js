import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import AdminLayout from '../Layouts/AdminLayout';
import { userRequest } from '../../requestMethods'
import { toast } from 'react-hot-toast';

import './ViewVet.scss'

function ViewVet() {

    const { id } = useParams()

    const[vcslId , setVcsl] = useState("")
  const[vetName, setName] = useState("")
  const[telephone , setTelephone] = useState("")
  const[email, setEmail] = useState("")
  const[experience, setExperience] = useState("")
  const[qualification, setQualification] = useState("")
  const [file, setFile] = useState(null)
  const [imageURL, setImageURL] = useState('')

    useEffect(() => {
        userRequest.get('/vets/' + id)
        .then(res => {
         setVcsl(res.data.vcslId)
        setName(res.data.vetName)
        setTelephone(res.data.telephone)
        setEmail(res.data.email)
        setExperience(res.data.experience)
        setQualification(res.data.qualification)
        setImageURL(res.data.profilePicture)
        }).catch(err =>{
            toast.error(err.message)
        })
      }, [id])

    return (
        <AdminLayout>
            <div className='product'>
            <table>
                <tr>
                    <td colSpan='2' className='imageContainer'>
                        <img src={imageURL} className='image' height='120px' />
                    </td>
                </tr>
                <tr>
                    <td>VCSL ID</td>
                    <td>{vcslId}</td>
                </tr>
                <tr>
                    <td>Vet Name</td>
                    <td>{vetName}</td>
                </tr>
                <tr>
                    <td>Telephone</td>
                    <td>{telephone}</td>
                </tr>
                <tr>
                    <td>Email</td>
                    <td>{email}</td>
                </tr>
                <tr>
                    <td>Experience</td>
                    <td>{experience}</td>
                </tr>
                <tr>
                    <td>Qualification</td>
                    <td>{qualification}</td>
                </tr>
            </table>
            </div>
        </AdminLayout>
    )
}

export default ViewVet