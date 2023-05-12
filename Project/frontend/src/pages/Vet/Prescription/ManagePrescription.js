import React, { useEffect } from 'react'
import AdminLayout from '../../Layouts/AdminLayout'
import { useState } from 'react';
import { userRequest } from '../../../requestMethods'
import CustomDataGrid from '../../../components/dataGrid/CustomDataGrid';
import { Link } from 'react-router-dom';
import { FiEdit } from 'react-icons/fi';
import { MdOutlineDelete } from 'react-icons/md';
import { AiOutlineEye } from 'react-icons/ai';
import { toast } from 'react-hot-toast';
import Swal from 'sweetalert2';
import {ImSearch} from 'react-icons/im'

import './ManagePrescription.scss'

function ManagePrescription() {

    const [prescriptions, setPrescription] = useState([])
    const [isSubmitted, setIsSubmitted] = useState(false)

    const getPrescriptions = () => {
        userRequest.get("/prescriptions")
        .then(res => {
            setPrescription(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }

    useEffect(() => {
        getPrescriptions()
    }, [isSubmitted])

    
    const handleDelete = (id) => {

      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          userRequest.delete('/prescriptions/' + id)
          .then(res => {
              setIsSubmitted(!isSubmitted)
              toast.success('Prescription deleted')
          })
          .catch(err => {
            alert(err)
          })
        }
      })
      
    }

    
    const SearchBar = () => {

      const [search, setSearch] = useState('')
    
      console.log(search)
    
      const handleSearch = (e) => {
          e.preventDefault()
          userRequest.get(`prescriptions?search=${search}`)
          .then(res => {
            setPrescription(res.data)
          })
          .catch(err => {
              console.log(err)
          })
      }
    
      return(

        <div className="search-bar-container">
          <form onSubmit={handleSearch}>
              <input type="text" className="search-field" value={search}  placeholder='Search...' onChange={(e) => setSearch(e.target.value)}/>
              <button type='submit' className="search-btn">
                <ImSearch className='search'/>
              </button>
          </form>
        </div>
      )
    }

    const columns = [
        
        {
          field: "petname",
          headerName: "Pet Name",
          headerAlign: "center",
          align: "center",
          flex: 2,
        },
        {
          field: "address",
          headerName: "Address",
          headerAlign: "center",
          align: "center",
          type: "text",
          flex: 4,
        },
        {
          field: "description",
          headerName: "Description",
          headerAlign: "center",
          align: "center",
          type: "text",
          flex: 4,
        },
        {
            field: "medicine",
            headerName: "Medicine",
            headerAlign: "center",
            align: "center",
            flex: 3,
        },
        {
          field: "dosage",
          headerName: "Dosage",
          headerAlign: "center",
          align: "center",
          flex: 2,
      },
        {
          field: "action",
          headerName: "Action",
          headerAlign: "center",
          align: "center",
          sortable: false,
          filterable: false,
          flex: 3,
          renderCell: (params) => {
            return (
              <div className='action'>
                <Link to={"/admin/prescriptions/ViewPrescription/" + params.row._id}>
                  <AiOutlineEye className='view' />
                </Link>
                {/* <Link to={"/admin/prescriptions/EditPrescription/" + params.row._id}>
                  <FiEdit className='edit' />
                </Link> */}
                <MdOutlineDelete className='delete' onClick={() => {handleDelete(params.row._id)}} />
              </div>
            );
          },
        },
      ];

    return (
        <AdminLayout>
            <div className='listContainer'>
              <CustomDataGrid data={prescriptions} columns={columns} searchBar={<SearchBar />} /> 
            </div>
        </AdminLayout>
    )
}

export default ManagePrescription