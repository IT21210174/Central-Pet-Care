import React, { useEffect } from 'react'
import AdminLayout from '../Layouts/AdminLayout'
import { useState } from 'react';
import { userRequest } from '../../requestMethods'
import CustomDataGrid from '../../components/dataGrid/CustomDataGrid';
import { Link } from 'react-router-dom';
import { FiEdit } from 'react-icons/fi';
import { MdOutlineDelete } from 'react-icons/md';
import { AiOutlineEye } from 'react-icons/ai';
import { toast } from 'react-hot-toast';
import Swal from 'sweetalert2';
import {ImSearch} from 'react-icons/im'
import './ManageTreatment.scss'

function ManageTreatment(){

    const [treatments, setTreatment] = useState([])
    const [isSubmitted, setIsSubmitted] = useState(false)

    const getTreatments = () => {
        userRequest.get("/treatments")
        .then(res => {
          setTreatment(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }

    useEffect(() => {
        getTreatments()
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
          userRequest.delete('/treatments/' + id)
          .then(res => {
              setIsSubmitted(!isSubmitted)
              toast.success('Treatment deleted')
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
          alert(search)
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
          field: "petID",
          headerName: "Pet ID",
          headerAlign: "center",
          align: "center",
          flex: 1,
        },
        {
          field: "petName",
          headerName: "Pet Name",
          headerAlign: "center",
          align:"center",
          flex: 1,
          
        },
        {
            field: "customerID",
            headerName: "Customer ID",
            headerAlign: "center",
            align:"center",
            flex: 1,
            
        },

        {
            field: "treatment",
            headerName: "Treatment",
            headerAlign: "center",
            align: "center",
            flex: 1,
        },
        {
            field: "progressNotes",
            headerName: "Progress Notes",
            headerAlign: "center",
            align: "center",
            flex: 1,
        },
        {
          field: "action",
          headerName: "Action",
          headerAlign: "center",
          align: "center",
          sortable: false,
          filterable: false,
          flex: 1,
          renderCell: (params) => {
            return (
              <div className='action'>
                <Link to={"/admin/treatments/ViewTreatment/" + params.row._id}>
                  <AiOutlineEye className='view' />
                </Link>
                <Link to={"/admin/treatments/EditTreatment/" + params.row._id}>
                  <FiEdit className='edit' />
                </Link>
                <MdOutlineDelete className='delete' onClick={() => {handleDelete(params.row._id)}} />
              </div>
            );
          },
        },
      ];

    return (
        <AdminLayout>
            <div className='listContainer'>
            <CustomDataGrid data={treatments} columns={columns} searchBar={<SearchBar />} /> 
            </div>
        </AdminLayout>
    )
}

export default ManageTreatment